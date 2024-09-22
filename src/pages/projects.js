import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/QuickTalk.jpg";
import project2 from "../../public/images/projects/Honey.jpg";
import project3 from "../../public/images/projects/Portfolio.jpg";
import project4 from "../../public/images/projects/AngryWolf.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full mt-12 flex items-center justify-between
    rounded-3xl border-4 border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:text-light dark:border-light
    lg:flex-col lg:p-8 xs:runded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image src={img} alt={title} className="w-full h-auto rounded-3xl border-2 border-solid border-dark dark:border-light "
        priority
        sizes='(max-width:768px) 100vw,
        (max-width:1200px) 50vw,
        33vw ' />
      </Link>
      

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank "
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Smallproject = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-center rounded-2xl
     border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto rounded-3xl border-2 border-solid border-dark dark:border-light "
        priority
        sizes='(max-width:768px) 100vw,
        (max-width:1200px) 50vw,
        33vw ' />
      </Link>

      <div className="w- full flex flex-col items-start justify-between pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link
          href={link}
          target="_blank "
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-2xl ">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10 dark:text-light md:w-6">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark md:text-base"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>projects page</title>
      </Head>
      <TransitionEffect/>
      <main className="w-full  mt-8 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <p className="text-7xl font-bold animate-slide-in-right dark:text-light lg:text-7xl sm:mb-8 sm:text-6xl xs:text-4xl">
            {" "}
            Showcasing innovative solutions !
          </p>
          <style jsx>{`
            @keyframes slideInRight {
              0% {
                transform: translateX(100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }

            .animate-slide-in-right {
              animation: slideInRight 1.5s ease-out forwards;
            }
          `}</style>

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 col-start-2 col-end-12 gap-y-32">
              <FeaturedProject
                title="QuickTalk-A Real Time Chat App"
                img={project1}
                summary="A feature-rich Crypto Screener App using R Tailwind CSS Context API React Router and Recharts 
                 It shows detail regarding almost all the cryptocurrency You can easily convert the price in your 
                 local "
                link="https://quicktalk-5lw9.onrender.com/"
                github="https://github.com/vamshi-nayak/QuickTalk"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 col-start-2 col-end-7 sm:col-span-12">
              <Smallproject
                title="Honey.ai"
                img={project2}
                link="/"
                github="https://github.com/vamshi-nayak/Honey.ai"
                type="website"
              />
            </div>
            <div className="col-span-6 col-start-7 col-end-12 sm:col-span-12">
              <Smallproject
                title="My-Portfolio"
                img={project3}
                link="/"
                github="https://github.com/vamshi-nayak/portfolio"
                type="website"
              />
            </div>
            <div className="col-span-12 col-start-2 col-end-12">
              <FeaturedProject
                title="Woolf waltz"
                img={project4}
                summary="Angry Wolf is a dynamic e-commerce platform built using the MERN stack, offering a seamless shopping experience with fast, 
                responsive design and secure user authentication."
                link="/"
                github="https://github.com/vamshi-nayak/WoolfWaltz"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
