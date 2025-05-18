import Image from "next/image";
import React from "react";

const ImageCards = ({ data, setIsOpen }) => {
  return (
    <div
      className="hover:scale-105 duration-100 ease-in-out hover:shadow-lg border-[1px] cursor-pointer"
      onClick={() => {setIsOpen({status: true, data: data})}}
    >
      <Image src={data.image} width={180} height={100} alt="" style={{width: "auto", height: "auto"}}/>
    </div>
  );
};

export default ImageCards;
