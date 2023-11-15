// pages/index.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from "react";
import ItemCard from "../components/ItemCard";

function Home() {
    const dispatch = useDispatch();
    const itemsArr = useSelector((state: RootState) => state.item.items);
    const loading = useSelector((state: RootState) => state.item.loading);

    useEffect(() => {
        dispatch({type: 'ITEM/FETCH_ITEMS_ASYNC'});
    }, []);

    useEffect(() => {
        console.log('(index.tsx)Items have been updated:', itemsArr);
    }, [itemsArr]); // 아이템 리스트에 변경이 있을 때 실행


    return (
        <div>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : itemsArr && itemsArr.length > 0 ? (
                    itemsArr.map((item) => <ItemCard key={item.id} item={item} />)
                ) : (
                    <div>No items available</div>
                )}
            </div>
        </div>
    );
}

export default Home;
