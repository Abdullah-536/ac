import { useLoaderData, useParams } from "react-router-dom";
import { DisplayCard } from "../components/UI/DisplayCard/DisplayCard";

export const CardDetails = () => {
    const { id } = useParams();
    const mobileData = useLoaderData();

    if (!mobileData || mobileData.length === 0) {
        return <h1>Data not found</h1>;
    }

    const updatedMobileData = mobileData.find((data) => data.id.toString() === id);

    if (!updatedMobileData) {
        return <h1>Mobile not found</h1>;
    }
    // const {name, img_src,price,category} =updatedMobileData;

    return <DisplayCard updatedMobileData={updatedMobileData}  />
    
};
