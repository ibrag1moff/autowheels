"use client";
// react & next
import { useState, useEffect } from "react";

// icons
import { BiMenuAltRight } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

// next themes
import { useTheme } from "next-themes";

export default function Navbar() {
    const [navActive, setNavActive] = useState(false);
    const [navLinkActive, setNavLinkActive] = useState("#");
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setNavActive(false);
        });

        window.addEventListener("click", () => {
            setNavActive(false);
        });
    }, [navActive]);

    return (
        <nav
            onClick={(e) => e.stopPropagation()}
            className="fixed w-full bg-white dark:bg-black/70 z-20 border-b-2 dark:border-black  px-3 xs:px-8 py-6 mx-auto bg-transparent"
        >
            <div className="flex items-center justify-between">
                <a
                    onClick={() => setNavLinkActive("#")}
                    className="font-bold text-xl xs:text-2xl md:text-3xl z-30"
                    href="#"
                >
                    AutoWheels <span className="text-main">Inc.</span>
                </a>
                {/* mobile nav */}
                <div
                    className={
                        navActive
                            ? "fixed top-0 bottom-0 h-[70vh] rounded-xl transition-all duration-300 left-0 z-20 right-0 bg-[#f2f3f4] dark:bg-black/95 border-b-2 border-black/50 flex flex-col items-center justify-center gap-3 text-2xl"
                            : "fixed top-[-100%] xlg:flex items-center gap-4 transition-all duration-100"
                    }
                >
                    <a
                        onClick={() => setNavLinkActive("#")}
                        className={
                            navLinkActive === "#"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#"
                    >
                        Home
                    </a>
                    <a
                        onClick={() => setNavLinkActive("#services")}
                        className={
                            navLinkActive === "#services"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#services"
                    >
                        Services
                    </a>
                    <a
                        onClick={() => setNavLinkActive("#models")}
                        className={
                            navLinkActive === "#models"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#models"
                    >
                        Models
                    </a>
                    <a
                        onClick={() => setNavLinkActive("#faq")}
                        className={
                            navLinkActive === "#faq"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#faq"
                    >
                        FAQ
                    </a>
                    <a
                        onClick={() => setNavLinkActive("#feedback")}
                        className={
                            navLinkActive === "#feedback"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#feedback"
                    >
                        Feedback
                    </a>{" "}
                </div>
                <div className="hidden xlg:flex xlg:items-center xlg:gap-8 text-lg">
                    <a
                        onClick={() => setNavLinkActive("#")}
                        className={
                            navLinkActive === "#"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#"
                    >
                        Home
                    </a>
                    <a
                        onClick={() => setNavLinkActive("#services")}
                        className={
                            navLinkActive === "#services"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#services"
                    >
                        Services
                    </a>
                    <a
                        onClick={() => setNavLinkActive("#models")}
                        className={
                            navLinkActive === "#models"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#models"
                    >
                        Models
                    </a>
                    <a
                        onClick={() => setNavLinkActive("#faq")}
                        className={
                            navLinkActive === "#faq"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#faq"
                    >
                        FAQ
                    </a>
                    <a
                        onClick={() => setNavLinkActive("#feedback")}
                        className={
                            navLinkActive === "#feedback"
                                ? "font-semibold text-main transition-all duration-300 lg:text-lg"
                                : "font-semibold hover:underline hover:text-main transition-all duration-300 lg:text-lg"
                        }
                        href="#feedback"
                    >
                        Feedback
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    {theme === "light" ? (
                        <button
                            onClick={() => setTheme("dark")}
                            className="bg-main hover:bg-[#317fc4] transition-all duration-300 p-2 xs:px-6 xs:py-2 rounded-full text-white"
                        >
                            <BsFillMoonFill size={20} />
                        </button>
                    ) : (
                        <button
                            onClick={() => setTheme("light")}
                            className="bg-main hover:bg-[#317fc4] transition-all duration-300 p-2 xs:px-6 xs:py-2 rounded-full text-white"
                        >
                            <BsFillSunFill size={20} />
                        </button>
                    )}
                    <button
                        onClick={() => setNavActive(!navActive)}
                        className="z-30 xlg:hidden"
                    >
                        {navActive ? (
                            <AiOutlineClose size={30} />
                        ) : (
                            <BiMenuAltRight size={30} />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
}
