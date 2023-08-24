// next
import Link from "next/link";

// icons
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center xlg:flex-row xlg:justify-between gap-12 bg-main text-white py-8 xlg:py-16 px-4 xlg:px-8 lg:px-[120px]">
            <div className="flex flex-col gap-4 items-center text-center">
                <Link className="font-extrabold text-2xl sm:text-3xl" href="/">
                    AutoWheels Inc.
                </Link>
                <p className="text-gray-200 max-w-[500px]">
                    Join us at AutoWheels Inc., where excellence drives
                    everything we do. Whether you're a seasoned car enthusiast
                    or a first-time buyer, we're here to make your car-buying
                    journey an enjoyable and memorable one
                </p>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="uppercase font-bold text-xl">contact us</h2>
                <div className="flex flex-col gap-3">
                    <span className="text-gray-200 font-semibold">
                        autowheelsbusiness@gmail.com
                    </span>
                    <span className="text-gray-200 font-semibold">
                        +1 456 654 99 00
                    </span>
                    <span className="text-gray-200 font-semibold">
                        New York City
                    </span>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <h2 className="uppercase font-bold text-xl">follow us</h2>
                <p className="text-gray-200 font-semibold">
                    Driven by Excellence
                </p>
                <div className="flex items-center gap-3">
                    <a
                        className="bg-gray-200 p-3 rounded-full text-[#333] hover:scale-[1.1]"
                        href="#"
                    >
                        <FaFacebookF size={25} />
                    </a>
                    <a
                        className="bg-gray-200 p-3 rounded-full text-[#333] hover:scale-[1.1]"
                        href="#"
                    >
                        <AiOutlineTwitter size={25} />
                    </a>
                    <a
                        className="bg-gray-200 p-3 rounded-full text-[#333] hover:scale-[1.1]"
                        href="#"
                    >
                        <AiOutlineInstagram size={25} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
