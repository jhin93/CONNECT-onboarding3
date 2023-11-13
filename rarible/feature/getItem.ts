import axios from "axios"
import rawMetadata from "../types/rawMetadata"
import ItemMetadata from "../types/itemMetadata";
// let itemMetadataArr: ItemMetadata[] = [];
let itemMetadataArr: any[] = [];
let itemDataList;

const getItems = async() =>  {
    const localURL = "http://localhost:3000";
    try {
        const rawData = await axios.get(localURL + '/api/itemListFetch');
        itemDataList = rawData.data.listings
        // @ts-ignore
        itemDataList.map((item: rawMetadata) => (itemMetadataArr.push(item.metadata)))
        return itemMetadataArr;
    } catch (error) {
        console.error("Error fetching data from getItems.ts :", error);
    }
}

export default getItems;