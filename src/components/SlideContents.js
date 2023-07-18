import * as React from "react";

export default function SlideContents({contents}) {
  return (
    <div className="px-4 lg:px-0 lg:ml-64 lg:w-1/3 overflow-visible lg:h-96 flex items-center justify-center text-white">
      <div>
        <div className="transition delay-500 duration-700 animated-fadeUp">
          <div className="text-2xl lg:text-5xl font-bold uppercase">{contents.title}</div>
          <p className="text-2xl lg:text-5xl font-medium">{contents.subTitle}</p>
        </div>
        <div className="text-xs lg:text-md font-medium mt-4 transition delay-700 duration-700 animated-fadeUp">
          {contents.desc}
        </div>
        <div className="text-xs lg:text-md font-medium transition delay-1000 duration-700 animated-fadeUp uppercase tracking-widest mt-16">
          {contents.name}
        </div>
      </div>
    </div>
  ); 
}
