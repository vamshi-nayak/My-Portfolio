import React,{useRef} from 'react';
import {motion,useScroll} from "framer-motion";
import LiIcon from './LiIcon';


const Details = ({type,time,place,info}) => {
    const ref = useRef(null);
return (
    <li ref={ref} className="my-9 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center md:w-[80%]">

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}>


          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
              {type}&nbsp;
          </h3>
          <span className='capitalize font-medium text-dark/75 dark:text-light xs:text-sm'>
          {time} | {place}
          </span>
          <p className='font-medium w-full md:text-sm'>{info}</p>
        </motion.div>
    </li>
);
};

const Certificates = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    );   
  return (
    <div className='my-64 mb-16'>
        <h2 className='font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'
        >Certifications
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        "/>

            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2" >
            
                <Details
                  type="MERN Stack Web Development with Ultimate Authentication"
                  time="November 25, 2023"
                  place="Infosys"
                  info="Completed a certification from Infosys on MERN Stack Web Development with Ultimate Authentication,
                   gaining expertise in building secure full-stack web applications using MongoDB, Express, React, and Node.js."
                />
                <Details
                  type="Creating Web Applications with MVC"
                  time="May 9, 2024"
                  place="Infosys"
                  info="Completed a certification from Infosys on Creating Web Applications with MVC, focusing on building structured web applications using the Model-View-Controller architecture for efficient development and maintainability."
                />
                
            </ul>
        </div>
    </div>
  )
}

export default Certificates;
  