// pages/index.tsx

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from "react"; // useState 추가
import ItemCard from "../components/ItemCard";
import {setSearchResult} from "../store/fetch/itemSlice";

function Home() {
    const dispatch = useDispatch();
    const itemsArr = useSelector((state: RootState) => state.item.items);
    const loading = useSelector((state: RootState) => state.item.loading);
    const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태 추가
    const searchResult = useSelector((state: RootState) => state.item.searchResult); // 검색 결과 상태 추가

    useEffect(() => {
        dispatch({type: 'ITEM/FETCH_ITEMS_ASYNC'});
    }, []);

    useEffect(() => {
        console.log('(index.tsx)Items have been updated:', itemsArr);
    }, [itemsArr]); // 아이템 리스트에 변경이 있을 때 실행

    useEffect(() => {
        // 검색어가 변경될 때마다 검색 결과를 업데이트합니다.
        const filteredItems = itemsArr.filter(item => item.name.includes(searchTerm));
        dispatch(setSearchResult(filteredItems));
    }, [searchTerm, itemsArr]); // 검색어나 아이템 리스트가 변경될 때 실행

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search by item name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // 검색어 입력 시 검색어 상태 업데이트
                />
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        {searchResult.length > 0 ? (
                            searchResult.map((item) => <ItemCard key={item.id} item={item} />)
                        ) : (
                            <div>No items available</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;
