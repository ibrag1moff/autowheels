"use client";
// react
import { FormEvent, useEffect, useState } from "react";

// utils
import { fetchData } from "@/utils/fetchData";

// components
import CarCard from "./CarCard";
import SearchCar from "./SearchCar";

// types
import { Car } from "@/types";

export default function CarList() {
    const [cars, setCars] = useState([]);
    const [searchMake, setSearchMake] = useState("bmw");
    const [searchModel, setSearchModel] = useState("530");

    useEffect(() => {
        fetchData(`make=${searchMake}&model=${searchModel}`).then((data) =>
            setCars(data)
        );
    }, [searchMake, searchModel]);

    return (
        <div id="models" className="py-20">
            <div className="text-center">
                <h5 className="uppercase text-main font-semibold sm:text-lg">
                    car list
                </h5>
                <h1 className="font-bold text-2xl xs:text-3xl md:text-4xl">
                    Explore our top Deal
                </h1>
            </div>
            <SearchCar
                searchModel={searchModel}
                setSearchModel={setSearchModel}
                searchMake={searchMake}
                setSearchMake={setSearchMake}
            />
            {cars.length ? (
                <div className="flex flex-wrap items-center justify-center gap-9 px-3">
                    {cars.map((car: Car, i: number) => {
                        return <CarCard key={i} car={car} />;
                    })}
                </div>
            ) : (
                <h1 className="flex items-center justify-center text-3xl font-extrabold xs:text-4xl md:text-5xl py-12">
                    No cars found
                </h1>
            )}
        </div>
    );
}
