import axios from "axios";
import rawMetadata from "../types/rawMetadata";
import ItemMetadata from "../types/itemMetadata";

const getItems = async () => {
    const localURL = "http://localhost:3000";
    try {
        const rawData = await axios.get(localURL + '/api/itemListFetch');
        const rawDataList: rawMetadata[] = rawData.data.listings;

        const itemMetadataArr: ItemMetadata[] = rawDataList.map((item) => item.metadata);

        return itemMetadataArr;
    } catch (error) {
        console.error("Error fetching data from getItems.ts:", error);
    }
};

export default getItems;
