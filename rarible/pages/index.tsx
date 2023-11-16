// pages/index.tsx

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { setSearchResult } from '../store/fetch/itemSlice';

function Home() {
    const dispatch = useDispatch();
    const itemsArr = useSelector((state: RootState) => state.item.items);
    const loading = useSelector((state: RootState) => state.item.loading);
    const [searchTerm, setSearchTerm] = useState("");
    const searchResult = useSelector((state: RootState) => state.item.searchResult);

    useEffect(() => {
        dispatch({type: 'ITEM/FETCH_ITEMS_ASYNC'});
    }, []);

    useEffect(() => {
        console.log('(index.tsx)Items have been updated:', itemsArr);
    }, [itemsArr]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            // Enter 키를 눌렀을 때만 검색을 수행합니다.
            performSearch(e.currentTarget.value);
        }
    };

    const performSearch = (searchTerm: string) => {
        // 검색어가 빈 문자열인 경우 모든 아이템을 검색 결과로 사용
        if (searchTerm === "") {
            dispatch(setSearchResult(itemsArr));
        } else {
            // 정확한 일치 비교
            const filteredItems = itemsArr.filter(item => item.name === searchTerm);
            dispatch(setSearchResult(filteredItems));
        }
    };

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search by item name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown} // Enter 키 입력 감지
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
