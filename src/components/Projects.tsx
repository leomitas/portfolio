import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto xl:px-0 p-4 flex flex-col">
      <h2 className="font-bold text-3xl">Projetos</h2>
      <div>
        <a
          href="https://oquebelavive.com.br"
          target="_blank"
          className="font-bold text-xl"
        >
          oquebelavive.com.br
        </a>
        <p>
          Desenvolvi um site personalizado para minha irmã, onde ela pode vender
          seus produtos exclusivos.
        </p>
        <p>
          O site apresenta uma interface intuitiva e elegante, destacando os
          itens à venda.
        </p>
        <p>
          Além disso, incluí uma seção que exibe postagens do Instagram dela,
          permitindo que os visitantes conheçam mais sobre ela.
        </p>
        <p>
          Para facilitar o contato, também adicionei informações de contato,
          como instagram e telefone(Whatsapp).
        </p>
        <p>
          Este projeto foi uma oportunidade incrível para aplicar minhas
          habilidades de desenvolvimento web e criar algo significativo para
          minha família.
        </p>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/2">
              <Image
                src="https://i.postimg.cc/m254w2Bx/print1.png"
                alt=""
                width={800}
                height={300}
              />
            </CarouselItem>
            <CarouselItem className="basis-1/2">
              <Image
                src="https://i.postimg.cc/LX6QwL3x/print2.png"
                alt=""
                width={800}
                height={300}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
