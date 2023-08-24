// react
import { Dispatch, SetStateAction } from "react";

// icons
import { AiOutlineSearch } from "react-icons/ai";

interface SearchCarProps {
    searchModel: string;
    setSearchModel: Dispatch<SetStateAction<string>>;
    searchMake: string;
    setSearchMake: Dispatch<SetStateAction<string>>;
}

export default function SearchCar({
    searchModel,
    setSearchModel,
    searchMake,
    setSearchMake,
}: SearchCarProps) {
    return (
        <form className="flex flex-col sm:flex-row gap-4 items-center justify-center py-9">
            <input
                className="bg-[#f2f3f4] dark:bg-black/50 px-8 py-2 rounded-full outline-none"
                type="text"
                placeholder="Search car's make..."
                onChange={(e) => setSearchMake(e.target.value)}
            />
            <input
                className="bg-[#f2f3f4] dark:bg-black/50 px-8 py-2 rounded-full outline-none"
                type="text"
                placeholder="Search car's model..."
                onChange={(e) => setSearchModel(e.target.value)}
            />
        </form>
    );
}
