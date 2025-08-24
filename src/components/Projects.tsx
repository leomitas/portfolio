import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { projects } from "@/database";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <ul>
        {projects.map((project, i) => {
          return (
            <li className="flex flex-col gap-4" key={i}>
              <div className="flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  className="font-bold text-xl w-max text-ebony-500"
                >
                  {project.title}{" "}
                  <span className="text-white">({project.link})</span>
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  className="flex gap-2 bg-white rounded-md py-1 px-2"
                >
                  <FaGithub color="black" className="w-6 h-6" />
                  <span className="text-xl font-mono font-extrabold text-black">
                    GitHub
                  </span>
                </a>
              </div>
              <div>
                {project.description.split(". ").map((sentence, i) => (
                  <p key={i}>{sentence}</p>
                ))}
              </div>
              {/* <Carousel>
                <CarouselContent className="carousel-images">
                </CarouselContent>
                </Carousel> */}
              {project.images.map((image, i) => {
                return (
                  <div className="flex w-full" key={i}>
                    <img
                      src={image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  // <CarouselItem className="sm:basis-1/3" key={i}>
                  //   <Image src={image} alt="" width={800} height={400} />
                  // </CarouselItem>
                );
              })}
            </li>
          );
        })}
      </ul>
    </>
  );
}
