import React, {lazy} from 'react'

import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from './Hero';
import  Navbar from './Navbar';
const  About = lazy(() => import('./About'));
const  Tech = lazy(() => import('./Tech'));
const  Experience = lazy(() => import('./Experience'));
const  Works = lazy(() => import('./Works'));
const  Feedbacks = lazy(() => import('./Feedbacks'));
const  Contact = lazy(() => import('./Contact'));

export  {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
}