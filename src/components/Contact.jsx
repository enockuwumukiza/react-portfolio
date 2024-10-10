import React from 'react'
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import EarthCanvas from './canvas/Earth'
import SectionWrapper from '../hoc/SectionWrapper'
import { slideIn } from '../utils/motion'
import { toast } from 'react-toastify'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  });
  const [loading,setLoading] = useState(false);

  const handleChange = e =>{
    const { name, value } = e.target;
    setForm({...form, [name]:value});
  }
  const handleSumit = e =>{
    e.preventDefault();
    setLoading(true);
    

// Public_key=
    emailjs.send('service_omi40w7','template_bjps4p9',{
      from_name:form.name,
      to_name:'Enock',
      from_email:form.email,
      to_email:'enockuwumukiza850@gmail.com',
      message:from.message
    },
    'aupIvEqlQDakCqT69'
  ).then(() =>{
    setLoading(false);
    toast.success('We will get to you as soon as possible');

    setForm({
      name:'',
      email:'',
      message:''
    })
  }, (error) =>{
    console.log(error);
    toast.error('something went wrong')
  });

 

  }
  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
    >
      <motion.div variants={slideIn("left", 'tween',0.2,1)}
        className='flex-[0.75] bg-black-160 p-8 roundex-2xl'
      >
        <p className={`${styles.sectionSubText}`}>Get In Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form action="" ref={formRef} onSubmit={handleSumit} className='mt-12 flex flex-col gap-8'>
          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name='name' value={form.name} 
              onChange={handleChange}
              placeholder="What's your name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name='email' value={form.email} 
              onChange={handleChange}
              placeholder="What's your email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label htmlFor="" className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea 
              rows={'7'}

              name='message' value={form.message} 
              onChange={handleChange}
              placeholder="What do you want to say"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button
            className='btn btn-primary bg-tertiary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary roundex-xl'
           type='submit'>
            {loading ? 'Sending...':'Send'}
          </button>

        </form>
      </motion.div>
      <motion.div variants={slideIn("right", 'tween',0.2,1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");