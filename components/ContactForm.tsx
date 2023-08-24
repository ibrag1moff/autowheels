export default function ContactForm() {
    return (
        <form className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                    className="bg-[#f2f3f4] px-8 py-2 rounded-full outline-none"
                    type="text"
                    placeholder="Name"
                    required
                />
                <input
                    className="bg-[#f2f3f4] px-8 py-2 rounded-full outline-none"
                    type="text"
                    placeholder="Surname"
                    required
                />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                    className="bg-[#f2f3f4] px-8 py-2 rounded-full outline-none"
                    type="number"
                    placeholder="Phone Number"
                    required
                />
                <input
                    className="bg-[#f2f3f4] px-8 py-2 rounded-full outline-none"
                    type="email"
                    placeholder="Email"
                    required
                />
            </div>
            <button
                className="bg-main py-2 px-8 rounded-full text-white font-bold hover:bg-[#317fc4] transition-all duration-300"
                type="submit"
            >
                Send message
            </button>
        </form>
    );
}
