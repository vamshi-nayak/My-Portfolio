import React,{useRef} from 'react';
import {motion,useScroll} from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({type,time,place,info}) => {
    const ref = useRef(null);
return (
    <li ref={ref} className="my-9 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center  md:w-[80%]">

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}>


          <h3 className="capitalize font-bold text-2xl xs:text-sm">
              {type}&nbsp;
          </h3>
          <span className='capitalize font-medium text-dark/75 dark:text-light xs:text-sm'>
          {time} | {place}
          </span>
          <p className='font-medium w-full xs:text-sm'>{info}</p>
        </motion.div>
    </li>
);
};
        

const Education=() =>{
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end","center start"]
        }
    );   
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'
        >Education
        </h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

        <motion.div
        style={{scaleY: scrollYProgress}}
        className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        "/>

            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2" >
            
                <Details
                  type="Bachelor Of Science In Information Technology"
                  time="2021-present"
                  place="Chaitanya Bharathi Institute Of Technology (CBIT)"
                  info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                        Intelligence."
                />
                <Details
                  type="Intermediate Education"
                  time="2019-2021"
                  place="Narayana Junior College"
                  info="Developed a strong foundation in mathematical problem-solving, understanding core principles of physics, and exploring the chemical properties and reactions of various substances."
                />
                <Details
                  type="High School"
                  time="2018-2019"
                  place="Genius High School"
                  info="Build basic foundation in mathematics, science, and language skills, along with critical thinking and problem-solving abilities during my high school education"
                />
            </ul>
        </div>
    </div>
  )
}

export default Education;