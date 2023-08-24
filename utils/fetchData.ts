const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
};

export const fetchData = async (url: string) => {
    const res = await fetch(
        `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?${url}`,
        options as any
    );
    return res.json();
};
