"use client";
import React from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { BackgroundLines } from "../components/ui/background-lines";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../components/ui/tracing-beam";
import { PixelatedCanvas } from "../components/ui/pixelated-canvas";
import { EvervaultCard, Icon } from "../components/ui/evervault-card";




export default function Home() {
  return (

    <main className="h-full w-full ">
      <SparklesPreview />
      <hr className="my-20 border-neutral-600 blue:border-neutral-700" />
      <BackgroundBoxesDemo />
      <hr className="my-20 border-neutral-600 blue:border-neutral-700" />
      <BackgroundBeamsWithCollisionDemo />
      <hr className="my-20 border-neutral-600 blue:border-neutral-700" />
      <BackgroundLinesDemo />
      <hr className="my-20 border-neutral-600 blue:border-neutral-700" />
      <TracingBeamDemo /> 
      <hr className="my-20 border-neutral-600 blue:border-neutral-700" />
      <PixelatedCanvasDemo />
      <hr className="my-20 border-neutral-600 dark:border-neutral-700" />
      <EvervaultCardDemo />
      <hr className="my-20 border-neutral-600 blue:border-neutral-700" />
    </main>
  );
}

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-brand py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Fusion Studios, <br /> your future AI partner.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 font-brand dark:text-neutral-400 text-center">
        Get the best advices, tutorials, snips, repos, AI bots and more, totally free.
      </p>
    </BackgroundLines>
  );
}

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <EvervaultCard text="hover" className="font-brand" />
 
      <h2 className="dark:text-white text-black mt-4 font-brand text-sm font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-brand font-boldx dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p>
    </div>
  );
}

export function PixelatedCanvasDemo() {
  return (
    
    <div className="mx-auto flex w-full items-center justify-center">
<br></br>
      <PixelatedCanvas
        src="https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={800}
        height={600}
        cellSize={4}
        dotScale={0.9}
        shape="square"
        backgroundColor="#000000"
        dropoutStrength={0.1}
        interactive
        distortionStrength={0.1}
        distortionRadius={200}
        distortionMode="repel"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
    </div>
  );
}



export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6 font-brand">
      
      /* max-include it to the first div before w- preoerty to add more scroll effect */

      <div className="w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className="text-xl mb-4">
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
 
const dummyContent = [
  {
    title: "Started / Learning / Implementing Tailwind CSS",
    description: (
      <>
        <p>
          
        </p>
        <p>
        Alhamdulilah now i am familiar with major react libraries and frameworks like nextjs, remix, react native, expo, electron and more. I have also started learning tailwind css and implementing it in my projects. Tailwind css is a utility-first css framework that allows you to build custom designs without writing css. It has a large community and a lot of resources available online. I am excited to learn more about it and use it in my future projects.
        </p>
        <p>
        </p>
      </>
    ),
    badge: "Announcement",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Accertinity UI Changelog - June 2024",
    description: (
      <>
        <p>
        Learned to modify - create - isntall NextJS and ShadCN Projects easily 
        while editing components.json and package.json files 
        also learned the usage of in-vs-code termianl and its usage what an era we live in
         </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Merging and Pushing everything from local to remote repository",
    description: (
      <>
        <p>
      TO Conclude the learning journey i am now a powerfull user for git services and github repos 
      including cloning a remote repo or pushing my local repo to remote repo while commiting files and comments 
      the right way and testing them on the github GUI 
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[35rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20 font-brand")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 font-serif">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}


export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="bg-black">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-white dark:text-white font-brand tracking-tight">
        What's cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}

export function SparklesPreview() {
  return (
    <div className="h-[35rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden p-20 ">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-brand text-center text-white relative z-20">
        Fusion Studios
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

