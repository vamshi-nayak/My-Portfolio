import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePic from "../../public/images/profile/l21.png";
import Image from "next/image";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
    return(
        <>
        <Head>
            <title>About page</title>
              
        </Head>
        <TransitionEffect/>
        <main className='w-full flex flex-col items-center justify-center ml-10 mt-8 dark:text-light'>
            <Layout className='pt-16'>
            <AnimatedText text="Hey i'am Vamshi Nayak !" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-6 md:order-2 md:col-span-7">
                    <h1 className="mb-4 mt-3 text-lg font-bold uppercase text-dark/75 dark:text-light">Biography</h1>
                    <p className=" font-medium">
                    As a skilled MERN stack developer, I specialize in building robust and scalable web applications using MongoDB, Express.js, React, and Node.js. With a strong foundation in JavaScript and experience across the full development lifecycle.
                    </p>
                    <p className=" my-6 font-medium">
                    My passion for clean code, attention to detail, and continuous learning drives me to deliver high-quality, user-centric solutions that meet modern web standards.I am adept at designing responsive user interfaces and managing databases to ensure seamless performance.
                    </p>
                    <p className="font-medium">
                    Whether working independently or as part of a team, I thrive on turning complex requirements into intuitive digital experiences.
                    </p>
                </div>
                <div className="col-span-3 relative h-max rounded-full border-2 border-solid border-dark
                 bg-light p-8 dark:bg-dark dark:border-light xl:col-span-6 md:order-1 md:col-span-6
                ">
                    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-full bg-dark dark:bg-light "/>
                    <Image src={profilePic} alt="vamshi" className='w-full h-auto  '
                    priority
                    sizes='(max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    33vw '/>
                </div>
            </div>
            <Skills/>
            <Education/>
            <Certificates/>
            </Layout>
        </main>
        </>
    )
}

export default about;