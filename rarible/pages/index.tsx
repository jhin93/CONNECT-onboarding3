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
        dispatch({ type: 'ITEM/FETCH_ITEMS_ASYNC' });
    }, []);

    useEffect(() => {
        console.log('(index.tsx)Items have been updated:', itemsArr);
        setSearchTerm("");
        dispatch(setSearchResult(itemsArr)); // 페이지 최초 렌더링 시에도 모든 아이템이 나타나도록 초기 검색어를 빈 문자열로 설정
    }, [itemsArr]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            performSearch(e.currentTarget.value); // Enter 키 입력시 검색 실행
        }
    };

    const performSearch = (searchTerm: string) => {
        const filteredItems = itemsArr.filter(item => item.name.includes(searchTerm));
        dispatch(setSearchResult(filteredItems));
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
