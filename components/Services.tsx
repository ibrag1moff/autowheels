// icons
import { BsCarFrontFill } from "react-icons/bs";
import { AiFillCarryOut } from "react-icons/ai";
import { GiReturnArrow } from "react-icons/gi";

// components
import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "New Car Sales",
            icon: <BsCarFrontFill size={50} fill="#1167b1" />,
            info: "We offer the latest models from popular automakers, providing customers with the latest technology, safety features, and innovative designs.",
        },
        {
            id: 2,
            title: "Car Customization",
            icon: <AiFillCarryOut size={50} fill="#1167b1" />,
            info: "Our in-house customization team can personalize vehicles to reflect the unique style and preferences of our customers.",
        },
        {
            id: 3,
            title: "Trade-ins and Financing",
            icon: <GiReturnArrow size={50} fill="#1167b1" />,
            info: "We facilitate smooth trade-ins for customers looking to upgrade their vehicles.Additionally, we provide competitive financing options to make car ownership accessible.",
        },
    ];
    return (
        <div
            id="services"
            className="flex flex-wrap items-center justify-center gap-9 px-3 py-20"
        >
            {services.map((service) => {
                return <ServiceCard key={service.id} {...service} />;
            })}
        </div>
    );
}
