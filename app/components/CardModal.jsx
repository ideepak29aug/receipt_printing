'use client'

import Image from "next/image";
import React, { useContext, useState } from "react";
import AccountContext from "../context/AccountContext";

const CardModal = ({ setIsOpen, isOpen }) => {
    const { setData } = useContext(AccountContext);
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = () => {
        setSubmitting(true)
        setData((prevData) =>
          prevData.map((item) =>
            item.id === isOpen.data.id
              ? {
                  ...isOpen.data,
                  selected: !item.selected, // ensure it's selected
                }
              : item
          )
        );
        setTimeout(() => {
            setSubmitting(false)        
            setIsOpen({ status: false, data: null });
        }, 500)
    }

  return (
    <div className="absolute flex justify-center items-center z-50">
      <div
        className="w-screen h-screen glassmorphism"
        onClick={() => {
          setIsOpen({ status: false, data: null });
        }}
      ></div>
      <div className="absolute bg-white p-6 rounded-2xl border-blue-400 border-4">
        <div
          className="bg-red-500 text-white absolute -right-2 -top-2 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => {
            setIsOpen({ status: false, data: null });
          }}
        >
          X
        </div>
        <table>
          <thead className="">
            <tr>
              <th className="w-72">Image</th>
              <th className="w-[26rem]">Details</th>
              <th className="w-32">Width</th>
              <th className="w-32">Height</th>
              <th className="w-32">Qty</th>
              <th className="w-32">Sqft</th>
              <th className="w-32">{"Rate (Rs.)"}</th>
              <th className="w-32">{"Amount (Rs.)"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image
                  src={isOpen.data.image}
                  width={250}
                  height={100}
                  alt=""
                  style={{width: "auto", height: "auto"}}
                />
              </td>
              <td className="p-2 align-top">
                <div>
                  <div>
                    <p>
                      {isOpen.data.details.wtype && isOpen.data.details.wtype}
                    </p>
                    <p>
                      {isOpen.data.details.info1 && isOpen.data.details.info1}
                    </p>
                    <p>
                      {isOpen.data.details.info2 && isOpen.data.details.info2}
                    </p>
                    <p>
                      {isOpen.data.details.info3 && isOpen.data.details.info3}
                    </p>
                    <p>
                      {isOpen.data.details.info4 && isOpen.data.details.info4}
                    </p>
                  </div>
                  <div>
                    {isOpen.data.details.flyscreen && (
                      <div className="w-full flex">
                        <p className="w-[50%]">
                          {isOpen.data.details.flyscreen}
                        </p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.flyscreendetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  flyscreendetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.color && (
                      <div className="w-full flex">
                        <p className="w-[50%]">{isOpen.data.details.color}</p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.colordetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  colordetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.hardwarecolor && (
                      <div className="w-full flex">
                        <p className="w-[50%]">
                          {isOpen.data.details.hardwarecolor}
                        </p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.hardwarecolordetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  hardwarecolordetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.track && (
                      <div className="w-full flex">
                        <p className="w-[50%]">{isOpen.data.details.track}</p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.trackdetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  trackdetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.sash && (
                      <div className="w-full flex">
                        <p className="w-[50%]">{isOpen.data.details.sash}</p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.sashdetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  sashdetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.leftlock && (
                      <div className="w-full flex">
                        <p className="w-[50%]">
                          {isOpen.data.details.leftlock}
                        </p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.leftlockdetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  leftlockdetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.rightlock && (
                      <div className="w-full flex">
                        <p className="w-[50%]">
                          {isOpen.data.details.rightlock}
                        </p>{" "}
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.rightlockdetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  rightlockdetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.outer && (
                      <div className="w-full flex">
                        <p className="w-[50%]">{isOpen.data.details.outer}</p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.outerdetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  outerdetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.lock && (
                      <div className="w-full flex">
                        <p className="w-[50%]">{isOpen.data.details.lock}</p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.lockdetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  lockdetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.hinge && (
                      <div className="w-full flex">
                        <p className="w-[50%]">{isOpen.data.details.hinge}</p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.hingedetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  hingedetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                    {isOpen.data.details.mullion && (
                      <div className="w-full flex">
                        <p className="w-[50%]">{isOpen.data.details.mullion}</p>
                        <input
                          type="text"
                          className="w-[50%]"
                          value={isOpen.data.details.mulliondetail}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setIsOpen((prev) => ({
                              ...prev,
                              data: {
                                ...prev.data,
                                details: {
                                  ...prev.data.details,
                                  mulliondetail: newValue,
                                },
                              },
                            }));
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </td>
              <td className="p-2 align-top">
                <input
                  type="text"
                  className="w-full"
                  value={isOpen.data.width}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setIsOpen((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        width: newValue,
                      },
                    }));
                  }}
                />
              </td>
              <td className="p-2 align-top">
                <input
                  type="text"
                  className="w-full"
                  value={isOpen.data.height}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setIsOpen((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        height: newValue,
                      },
                    }));
                  }}
                />
              </td>
              <td className="p-2 align-top">
                <input
                  type="text"
                  className="w-full"
                  value={isOpen.data.quantity}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setIsOpen((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        quantity: newValue,
                      },
                    }));
                  }}
                />
              </td>
              <td className="p-2 align-top">
                <input
                  type="text"
                  className="w-full"
                  value={isOpen.data.sqft}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setIsOpen((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        sqft: newValue,
                      },
                    }));
                  }}
                />
              </td>
              <td className="p-2 align-top">
                <input
                  type="text"
                  className="w-full"
                  value={isOpen.data.Rate}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setIsOpen((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        Rate: newValue,
                      },
                    }));
                  }}
                />
              </td>
              <td className="p-2 align-top">
                <input
                  type="text"
                  className="w-full"
                  value={isOpen.data.Amount}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setIsOpen((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        Amount: newValue,
                      },
                    }));
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="p-4 flex justify-end items-center">
          <button
            type="button"
            onClick={handleSubmit}
            className={`${
              !isOpen.data.selected ? "bg-green-500" : "bg-red-500"
            } text-white cursor-pointer px-4 py-2 rounded-lg`}
          >
            {submitting && !isOpen.data.selected
              ? "Adding to Cart..."
              : submitting && isOpen.data.selected
              ? "Removing from Cart..."
              : !isOpen.data.selected
              ? "Add to Cart"
              : "Remove from Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
