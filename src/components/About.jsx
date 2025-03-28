import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { textVariant , fadeIn} from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("rigth","spring",0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={
        {
          max:45,
          scale:1,
          speed:450
        }
      } className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt='title' className='w-16 h-16 object-contain'/>
          <h3 className='text-white font-bold text-[20px] text-center'>{title}</h3>
      </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am skilled web developer with {new Date().getFullYear() - 2022} years of experience in JavaScript and frameworks like ReactJS, ExpressJs, NodeJS, Django and FastAPI. I am a quick learner and collaborate closely with other students worldwide. When I get opportunity I closely colaborate with the clients to create efficient, scalable solutions that solve real world programs.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,'about');