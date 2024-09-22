import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/one.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import HireMe from '@/components/HireMe';
import TransitionEffect from '@/components/TransitionEffect';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
             <div className='w-1/2 pl-20 pt-0 md:w-full'>
              <Image src={profilePic} alt="vamshi" className='w-auto h-auto rounded-full lg:hidden md:inline-block md:w-full'
              priority
              
              />
             </div>
             <div className='w-1/2 flex flex-col item-center self-center pl-0 pr-10 pt-0 lg:w-full lg:text-center'>
              <AnimatedText text="Crafting Bridge Between Frontend And Backend With Mastery." className='!text-left 
              xl:!text-5xl lg:!text-center  lg:!text=6xl md:!text-center md:!text-4xl sm:!text-3xl sm:!text-center
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'> 
                <Link href="/resume.pdf" target={"_blank"}
                 className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/>           
                
                </Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=kethavathvamshinayak02@gmail.com" target={"_blank"}
                 className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base "
                >Contact</Link>
              </div>
             </div>
          </div>
        </Layout> 
        <HireMe/>
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="vamshi" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
