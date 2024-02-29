"use client";

import clsx from "clsx";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "./ui/button";

export default function Header() {
  const [activate, setActivate] = useState("hidden");
  const [open, setOpen] = useState(false);

  const changeActivate = () => {
    if (activate == "flex w-full") {
      setActivate("hidden w-full");
      setOpen(false);
    } else {
      setActivate("flex w-full");
      setOpen(false);
    }
  };

  return (
    <header className="border-b-2 shadow-md border-b-purple-heart-700 text-white md:flex bg-gray-0 sticky top-0 left-0 z-50">
      <div className="flex justify-between max-w-7xl xl:px-0 w-full mx-auto flex-col md:flex-row">
        <div className="flex justify-between p-4 max-w-7xl xl:px-0 w-full">
          <h2 className="flex items-center font-bold">Leonardo Abreu</h2>
          <button
            onClick={changeActivate}
            className="bg-grey-1 p-4 rounded-lg md:hidden"
          >
            {!open ? <FaBars color="grey" /> : <IoClose />}
          </button>
        </div>
        <nav
          className={clsx(
            "justify-between p-4 md:flex md:gap-4 md:w-full",
            activate
          )}
        >
          <Button variant={"link"} className="text-white">
            <a href="#stack">Stack</a>
          </Button>
          <Button variant={"link"} className="text-white">
            <a href="#about-me">Sobre mim</a>
          </Button>
          <Button variant={"link"} className="text-white">
            <a href="#projects">Projetos</a>
          </Button>
          <Button variant={"link"} className="text-white">
            <a href="https://drive.google.com/file/d/1IMrErndPCsXlmNglUd6t0JjXQZd33nXt/view?usp=sharing">
              Currículo
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
