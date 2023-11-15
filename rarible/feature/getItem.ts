import axios from "axios";
import rawMetadata from "../types/rawMetadata";
import ItemMetadata from "../types/itemMetadata";

const getItems = async () => {
    const localURL = "http://localhost:3000";
    try {
        const rawData = await axios.get(localURL + '/api/itemListFetch');
        // 1. .map() 메소드를 사용하여 새로운 배열을 생성하고, 이 배열을 itemMetadataArr에 할당(.push 사용 X)
        // 2. rawDataList와 itemMetadataArr를 함수 내부로 옮겨서 함수 외부에서 발생할 수 있는 문제를 방지
        const rawDataList: rawMetadata[] = rawData.data.listings;
        const itemMetadataArr: ItemMetadata[] = rawDataList.map((item) => item.metadata);
        return itemMetadataArr;
    } catch (error) {
        console.error("Error fetching data from getItems.ts:", error);
    }
};

export default getItems;
