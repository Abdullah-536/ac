export const getCardDetails = async ({ params }) => {
    // console.log("Params received:", params); // Debugging line
    const { category, id } = params;

    let cardApi = "";
    if (category === "apple") {
        cardApi = "/api/apple.json";
    } else if (category === "samsung-A-series") {
        cardApi = "/api/samsung_A_Series.json";
    } else if (category === "samsung-S-series") {
        cardApi = "/api/samsung_S_Series.json";
    }else if(category ==="huawei") {
        cardApi = "/api/huawei.json"
    }
    else {
        console.error("Invalid category:", category);
        return null;
    }

    try {
        const response = await fetch(cardApi);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching card details:", error);
        return null;
    }
};
