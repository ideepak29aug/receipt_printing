"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import AccountContext from "../context/AccountContext";

const CardModal = ({ setIsOpen, isOpen }) => {
  const { setData } = useContext(AccountContext);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);
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
      setSubmitting(false);
      setIsOpen({ status: false, data: null });
    }, 500);
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center z-20">
      <div
        className="w-screen inset-0 h-screen bg-white/5 backdrop-blur-sm z-30"
        onClick={() => {
          setIsOpen({ status: false, data: null });
        }}
      ></div>
      <div className="absolute bg-white p-6 rounded-2xl shadow-2xl w-[90%] z-40">
        <div
          className="bg-red-500 text-white absolute -right-2 -top-2 w-6 h-6 rounded-full flex justify-center items-center cursor-pointer"
          onClick={() => {
            setIsOpen({ status: false, data: null });
          }}
        >
          X
        </div>
        <table className="w-full">
          <thead className="">
            <tr>
              <th className="w-[15%]">Image</th>
              <th className="w-[29%]">Details</th>
              <th className="w-[8%]">Weight</th>
              <th className="w-[8%]">Width</th>
              <th className="w-[8%]">Height</th>
              <th className="w-[8%]">Qty</th>
              <th className="w-[8%]">Sqft</th>
              <th className="w-[8%]">{"Rate (Rs.)"}</th>
              <th className="w-[8%]">{"Amount (Rs.)"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex">
                  <div className="flex flex-col">
                    <div className="w-full h-10 flex items-center justify-between px-1">
                      <div className="relative w-[35%] h-1 bg-black after:absolute after:left-[-5px] after:top-1/2 after:translate-y-[-50%] after:border-y-4 after:border-r-8 after:border-l-0 after:border-solid after:border-transparent after:border-r-black"></div>
                      <div>{isOpen.data.width}</div>
                      <div className="relative w-[35%] h-1 bg-black after:absolute after:right-[-5px] after:top-1/2 after:translate-y-[-50%] after:border-y-4 after:border-l-8 after:border-r-0 after:border-solid after:border-transparent after:border-l-black"></div>
                    </div>
                    <Image
                      src={isOpen.data.images}
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
                      <div>{isOpen.data.height}</div>
                      <div className="relative w-1 h-[40%] bg-black after:absolute after:bottom-[-5px] after:left-1/2 after:translate-x-[-50%] after:border-x-4 after:border-t-8 after:border-b-0 after:border-solid after:border-transparent after:border-t-black"></div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center h-8">Weight : {isOpen.data.weight} Kg</div>
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
                  type="number"
                  className="w-full"
                  value={isOpen.data.weight}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    setIsOpen((prev) => ({
                      ...prev,
                      data: {
                        ...prev.data,
                        weight: newValue,
                      },
                    }));
                  }}
                />
              </td>
              <td className="p-2 align-top">
                <input
                  type="number"
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
                  type="number"
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
                {/* <input
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
                /> */}
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    className="bg-blue-500 text-white rounded-lg w-8 px-3 py-1 cursor-pointer"
                    disabled={isOpen.data.quantity <= 1}
                    onClick={() => {
                      const newValue = isOpen.data.quantity - 1;
                      setIsOpen((prev) => ({
                        ...prev,
                        data: {
                          ...prev.data,
                          quantity: newValue,
                        },
                      }));
                    }}
                  >
                    -
                  </button>
                  <p>{isOpen.data.quantity}</p>
                  <button
                    type="button"
                    className="bg-blue-500 text-white rounded-lg w-8 px-3 py-1 cursor-pointer"
                    onClick={() => {
                      const newValue = isOpen.data.quantity + 1;
                      setIsOpen((prev) => ({
                        ...prev,
                        data: {
                          ...prev.data,
                          quantity: newValue,
                        },
                      }));
                    }}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-2 align-top">
                <input
                  type="number"
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
                  type="number"
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
                  type="number"
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
