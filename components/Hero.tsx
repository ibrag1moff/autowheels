// components
import Elements from "./Elements";

export default function Hero() {
    return (
        <div className="px-2 py-20 xlg:py-32">
            <div className="flex flex-col-reverse items-center justify-center  xlg:flex-row xlg:justify-evenly">
                <div className="flex flex-col text-center lg:text-left gap-3 items-center justify-center lg:items-start">
                    <h1 className="font-bold text-2xl xs:text-3xl md:text-4xl xlg:max-w-[440px]">
                        Looking more to save on rental?
                    </h1>
                    <p className="font-medium xs:max-w-[462px] md:text-lg lg:mr-auto">
                        AutoWheels Inc. is a premier car dealership specializing
                        in providing high-quality vehicles and exceptional
                        customer service.
                    </p>
                    <a
                        href="#models"
                        className="bg-main hover:bg-[#317fc4] py-2 px-12 md:px-16 text-white font-bold rounded-3xl"
                    >
                        Explore now
                    </a>
                </div>
                <img className="w-[600px]" src="/hero.png" alt="Hero" />
            </div>
            <Elements />
        </div>
    );
}
