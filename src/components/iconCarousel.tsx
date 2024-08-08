import React from "react";
import Image from "next/image";

interface IconCarouselProps {
  icons: string[];
  width?: string;
  height?: string;
}

export const IconCarousel: React.FC<IconCarouselProps> = ({ icons, width = "64px", height = "64px" }) => {
  return (
    <div className="flex overflow-x-auto space-x-8 py-4 justify-center items-center">
      {icons.map((icon, index) => (
        <div key={index} className="flex-shrink-0 px-2">
          <Image src={icon} alt="" width={50} height={100}/>
        </div>
      ))}
    </div>
  );
};