export default function FAQ() {
    return (
        <div id="faq" className="py-20">
            <div className="text-center mb-9">
                <h5 className="uppercase text-main font-semibold sm:text-lg">
                    FAQ
                </h5>
                <h1 className="font-bold text-2xl xs:text-3xl md:text-4xl mb-8">
                    Frequently Asked Questions
                </h1>
            </div>
            <div>
                <section className="text-gray-700">
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-col items-center justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 dark:bg-black/95 dark:text-white rounded-md p-4">
                                        What types of vehicles do you sell?
                                    </summary>

                                    <div className="bg-main text-white">
                                        <span>
                                            We offer a wide range of vehicles,
                                            including sedans, SUVs, trucks, and
                                            even some luxury and performance
                                            models. Our inventory includes both
                                            new and pre-owned vehicles.
                                        </span>
                                    </div>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold bg-gray-200 dark:bg-black/95 dark:text-white rounded-md p-4">
                                        Do you provide financing options?
                                    </summary>

                                    <div className="bg-main text-white">
                                        <span>
                                            Yes, we offer financing solutions to
                                            suit different budgets and credit
                                            profiles. Our financial experts can
                                            assist you in finding the best
                                            financing plan that meets your
                                            needs.
                                        </span>
                                    </div>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 dark:bg-black/95 dark:text-white rounded-md p-4">
                                        How do I trade in my current vehicle?
                                    </summary>
                                    <div className="bg-main text-white">
                                        <span>
                                            We accept trade-ins! You can bring
                                            in your current vehicle, and our
                                            team will assess its condition and
                                            provide you with an offer. This
                                            offer can then be applied as a
                                            credit towards the purchase of a new
                                            vehicle.
                                        </span>
                                    </div>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 dark:bg-black/95 dark:text-white rounded-md p-4">
                                        Are your pre-owned vehicles inspected?
                                    </summary>
                                    <div className="bg-main text-white">
                                        <span className="px-4 py-2">
                                            Absolutely. Our pre-owned vehicles
                                            undergo a rigorous inspection
                                            process to ensure they meet our
                                            quality standards. Any necessary
                                            repairs or maintenance are performed
                                            before the vehicles are put up for
                                            sale.
                                        </span>
                                    </div>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 dark:bg-black/95 dark:text-white rounded-md p-4">
                                        What warranty options do you offer?
                                    </summary>
                                    <div className="bg-main text-white">
                                        <span className="px-4 py-2">
                                            We provide a variety of warranty
                                            options, including manufacturer
                                            warranties on new vehicles and
                                            extended warranty plans for both new
                                            and pre-owned vehicles. These plans
                                            can offer additional peace of mind
                                            and coverage beyond the standard
                                            warranties.
                                        </span>
                                    </div>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-gray-200 dark:bg-black/95 dark:text-white rounded-md p-4">
                                        Can I test drive a vehicle before
                                        purchasing it?
                                    </summary>
                                    <div className="bg-main text-white">
                                        <span className="px-4 py-2">
                                            Of course! We encourage all
                                            customers to take a test drive
                                            before making a decision. It's
                                            important to experience the vehicle
                                            firsthand and ensure it meets your
                                            preferences and requirements.
                                        </span>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
