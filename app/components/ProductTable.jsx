import Image from "next/image";
import React from "react";

const ProductTable = ({ data, serialNumber }) => {
  // if (data.selected)
    return (
      <tr className="break-avoid">
        <td className="align-top p-1">{serialNumber + 1}</td>
        <td className="align-top p-1">
          <div className="flex">
            <div className="flex flex-col">
              <div className="w-full h-10 flex items-center justify-between px-1">
                <div className="relative w-[35%] h-1 bg-black after:absolute after:left-[-5px] after:top-1/2 after:translate-y-[-50%] after:border-y-4 after:border-r-8 after:border-l-0 after:border-solid after:border-transparent after:border-r-black"></div>
                <div>{data.width}</div>
                <div className="relative w-[35%] h-1 bg-black after:absolute after:right-[-5px] after:top-1/2 after:translate-y-[-50%] after:border-y-4 after:border-l-8 after:border-r-0 after:border-solid after:border-transparent after:border-l-black"></div>
              </div>
              <Image
                src={data.images}
                width={200}
                style={{ height: "auto" }}
                alt=""
                priority
              />
            </div>
            <div className="flex flex-col w-11 items-center">
              <div className="h-11"></div>
              <div className="w-[20%] h-full flex flex-col items-center justify-between py-1">
                <div className="relative w-1 h-[40%] bg-black after:absolute after:top-[-5px] after:left-1/2 after:translate-x-[-50%] after:border-x-4 after:border-b-8 after:border-t-0 after:border-solid after:border-transparent after:border-b-black"></div>
                <div>{data.height}</div>
                <div className="relative w-1 h-[40%] bg-black after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] after:border-x-4 after:border-t-8 after:border-b-0 after:border-solid after:border-transparent after:border-t-black"></div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center h-8">
            Weight : {data.weight} Kg
          </div>
        </td>
        <td className="align-top p-1">
          <div>
            <div>
              <p>{data.details.wtype && data.details.wtype}</p>
              <p>{data.details.info1 && data.details.info1}</p>
              <p>{data.details.info2 && data.details.info2}</p>
              <p>{data.details.info3 && data.details.info3}</p>
              <p>{data.details.info4 && data.details.info4}</p>
            </div>
            <div>
              {data.details.flyscreen && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.flyscreen}</p>
                  <p className="w-[50%]">{data.details.flyscreendetail}</p>
                </div>
              )}
              {data.details.color && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.color}</p>
                  <p className="w-[50%]">{data.details.colordetail}</p>
                </div>
              )}
              {data.details.hardwarecolor && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.hardwarecolor}</p>
                  <p className="w-[50%]">{data.details.hardwarecolordetail}</p>
                </div>
              )}
              {data.details.track && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.track}</p>
                  <p className="w-[50%]">{data.details.trackdetail}</p>
                </div>
              )}
              {data.details.sash && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.sash}</p>
                  <p className="w-[50%]">{data.details.sashdetail}</p>
                </div>
              )}
              {data.details.leftlock && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.leftlock}</p>
                  <p className="w-[50%]">{data.details.leftlockdetail}</p>
                </div>
              )}
              {data.details.rightlock && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.rightlock}</p>
                  <p className="w-[50%]">{data.details.rightlockdetail}</p>
                </div>
              )}
              {data.details.outer && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.outer}</p>
                  <p className="w-[50%]">{data.details.outerdetail}</p>
                </div>
              )}
              {data.details.lock && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.lock}</p>
                  <p className="w-[50%]">{data.details.lockdetail}</p>
                </div>
              )}
              {data.details.hinge && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.hinge}</p>
                  <p className="w-[50%]">{data.details.hingedetail}</p>
                </div>
              )}
              {data.details.mullion && (
                <div className="w-full flex ">
                  <p className="w-[50%]">{data.details.mullion}</p>
                  <p className="w-[50%]">{data.details.mulliondetail}</p>
                </div>
              )}
            </div>
          </div>
        </td>
        <td className="align-top p-1">{data.width}</td>
        <td className="align-top p-1">{data.height}</td>
        <td className="align-top p-1">{data.quantity}</td>
        <td className="align-top p-1">{data.sqft}</td>
        <td className="align-top p-1">{data.Rate}</td>
        <td className="align-top p-1">{data.Amount}</td>
      </tr>
    );
};

export default ProductTable;
