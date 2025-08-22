import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { projects } from "@/database";

export default function Projects() {
  return (
    <>
      <ul>
        {projects.map((project, i) => {
          return (
            <li className="flex flex-col gap-4" key={i}>
              <a
                href={project.link}
                target="_blank"
                className="font-bold text-xl w-max text-ebony-500"
              >
                {project.title}{" "}
                <span className="text-white">({project.link})</span>
              </a>
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
