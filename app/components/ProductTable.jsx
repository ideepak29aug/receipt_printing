import Image from "next/image";
import React from "react";

const ProductTable = ({ data, index }) => {
  if (data.selected)
    return (
      <tr>
        <td className="align-top p-1">{index + 1}</td>
        <td className="align-top p-1">
          <Image src={data.image} alt="" width={200} height={100} className="h-auto w-[200px] object-contain" style={{width: "auto", height: "auto"}}/>
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
