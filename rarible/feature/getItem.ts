import axios from "axios"
import rawMetadata from "../types/rawMetadata"
import ItemMetadata from "../types/itemMetadata";
let itemMetadataArr: ItemMetadata[] = [];
let rawDataList: rawMetadata[] = [];

const getItems = async() =>  {
    const localURL = "http://localhost:3000";
    try {
        const rawData = await axios.get(localURL + '/api/itemListFetch');
        rawDataList = rawData.data.listings
        console.log("(getItem.ts)rawDataList : ", rawDataList)
        rawDataList.map((item) => (itemMetadataArr.push(item.metadata)))
        return itemMetadataArr;
    } catch (error) {
        console.error("Error fetching data from getItems.ts :", error);
    }
}

export default getItems;