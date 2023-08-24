// react & next
import React, { Fragment } from "react";
import img from "next/image";

// types
import { Car } from "@/types";

// headless ui
import { Dialog, Transition } from "@headlessui/react";

// utils
import { generateCarImgUrl } from "@/utils/generateCarImgUrl";

// icons
import { AiOutlineClose } from "react-icons/ai";

interface CarDetailsProps {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    car: Car;
}

export default function CarDetails({
    car,
    isModalOpen,
    setIsModalOpen,
}: CarDetailsProps) {
    return (
        <>
            <Transition appear show={isModalOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => setIsModalOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black dark:bg-white/30 bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-out duration-300"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white dark:bg-black mt-20 p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                                    <button
                                        type="button"
                                        className="absolute bg-main top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                                        onClick={() => setIsModalOpen(false)}
                                    >
                                        <AiOutlineClose size={25} />
                                    </button>

                                    <div className="flex-1 flex flex-col items-center bg-model rounded-xl gap-12">
                                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                                            <img
                                                src={generateCarImgUrl(car)}
                                                alt="car model"
                                                className="object-contain"
                                            />
                                        </div>

                                        <div className="flex gap-3">
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <img
                                                    src={generateCarImgUrl(
                                                        car,
                                                        "29"
                                                    )}
                                                    alt="car model"
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <img
                                                    src={generateCarImgUrl(
                                                        car,
                                                        "90"
                                                    )}
                                                    alt="car model"
                                                    className="object-contain"
                                                />
                                            </div>
                                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                                                <img
                                                    src={generateCarImgUrl(
                                                        car,
                                                        "13"
                                                    )}
                                                    alt="car model"
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col gap-2">
                                        <h2 className="font-semibold text-xl capitalize">
                                            {car.make} {car.model}
                                        </h2>

                                        <div className="mt-3 flex flex-wrap gap-4">
                                            {Object.entries(car).map(
                                                ([key, value]) => (
                                                    <div
                                                        className="flex justify-between gap-5 w-full text-right"
                                                        key={key}
                                                    >
                                                        <h4 className="text-grey capitalize">
                                                            {key
                                                                .split("_")
                                                                .join(" ")}
                                                        </h4>
                                                        <p className="text-black-100 font-semibold">
                                                            {value}
                                                        </p>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
