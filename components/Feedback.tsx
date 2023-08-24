// components
import ContactForm from "./ContactForm";

export default function Feedback() {
    return (
        <div id="feedback" className="py-20">
            <div className="text-center mb-9">
                <h5 className="uppercase text-main font-semibold sm:text-lg">
                    feedback
                </h5>
                <h1 className="font-bold text-2xl xs:text-3xl md:text-4xl mb-8">
                    Contact us
                </h1>
            </div>
            <ContactForm />
        </div>
    );
}
