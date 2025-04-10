import React from "react";
import { LuDownload } from "react-icons/lu";

export default function page() {
  return (
    <section className="flex flex-col items-center p-12 px-4 md:px-0 gap-8">
      <a
        className="flex items-center gap-2 max-w-max bg-ebony-500 p-2 px-8 rounded-md cursor-pointer"
        href="https://drive.google.com/file/d/1wQPeGwiDqW08OpG31JJA20VCLRoKPQWo/view"
        target="_blank"
      >
        <LuDownload /> Download CV
      </a>
      <iframe
        src="https://drive.google.com/file/d/1wQPeGwiDqW08OpG31JJA20VCLRoKPQWo/preview"
        allow="autoplay"
        height={1120}
        className="w-380 md:w-840 h-544 md:h-1120"
      ></iframe>
      <a
        className="flex items-center gap-2 max-w-max bg-ebony-500 p-2 px-8 rounded-md cursor-pointer"
        href="https://drive.google.com/file/d/1wQPeGwiDqW08OpG31JJA20VCLRoKPQWo/view"
        target="_blank"
      >
        <LuDownload /> Download CV
      </a>
    </section>
  );
}
