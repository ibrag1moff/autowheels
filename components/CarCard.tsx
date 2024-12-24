// react
import { useState } from "react";

// types
import { Car } from "@/types";

// utils
import { calculateCarRent } from "@/utils/calculateCarRent";
import { generateCarImgUrl } from "@/utils/generateCarImgUrl";

// icons
import { BsInfoCircleFill } from "react-icons/bs";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="w-full sm:w-[350px] shadow-xl min-h-[340px] group p-4 bg-[#f2f3f4] dark:bg-black/95 rounded">
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-xl first-letter:uppercase">
            {car.make} {car.model}
          </h1>
          <span className="font-semibold text-lg">
            ${calculateCarRent(car.city_mpg, car.year)}/day
          </span>
          <div>
            <img src={generateCarImgUrl(car)} alt="Carimg" />
          </div>
          <div className="flex flex-row-reverse items-center justify-between">
            <span className="lg:flex flex-col items-center gap-1 hidden lg:group-hover:hidden">
              <BsInfoCircleFill fill="#1167b1" size={22} />
              {car.city_mpg} MPG
            </span>
            <span className="lg:flex flex-col items-center gap-1 hidden lg:group-hover:hidden">
              <BsInfoCircleFill fill="#1167b1" size={22} />
              {car.fuel_type}
            </span>
            <span className="lg:flex flex-col items-center gap-1 hidden lg:group-hover:hidden">
              <BsInfoCircleFill fill="#1167b1" size={22} />
              {car.cylinders}
            </span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="lg:hidden mx-auto lg:group-hover:flex lg:group-hover:mx-auto bg-main hover:bg-[#317fc4] transition-all duration-300 text-white font-bold py-2 px-16 xs:px-24 rounded-full"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <CarDetails
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        car={car}
      />
    </>
  );
}
