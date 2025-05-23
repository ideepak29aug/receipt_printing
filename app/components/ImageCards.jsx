import Image from "next/image";
import React from "react";

const ImageCards = ({ data, setIsOpen }) => {
  return (
    <div
      className={`hover:scale-105 duration-100 ease-in-out hover:shadow-lg ${
        data.selected ? "border-[3px] border-green-500" : ""
      } cursor-pointer`}
      onClick={() => {
        setIsOpen({ status: true, data: data });
      }}
    >
      <Image
        src={data.image}
        width={180}
        style={{ height: "auto" }}
        alt=""
        priority
      />
    </div>
  );
};

export default ImageCards;
