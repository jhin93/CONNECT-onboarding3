// pages/index.tsx

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { setSearchResult } from '../store/fetch/itemSlice';
import styled from '@emotion/styled';

const HomeContainer = styled.div`
  padding: 0 16vw;
`

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  width: 30%;
  margin: 40px auto;
  display: block;
  padding: 8px;
  border-radius: 8px;
`;

const NavBar = styled.div`
  display: flex;
`

function Home() {
    const dispatch = useDispatch();
    const itemsArr = useSelector((state: RootState) => state.item.items);
    const loading = useSelector((state: RootState) => state.item.loading);
    const [searchTerm, setSearchTerm] = useState("");
    const searchResult = useSelector((state: RootState) => state.item.searchResult);
    const [gridColumns, setGridColumns] = useState(4);

    useEffect(() => {
        dispatch({ type: 'ITEM/FETCH_ITEMS_ASYNC' });
    }, []);

    useEffect(() => {
        console.log('(index.tsx) Items have been updated:', itemsArr);
        setSearchTerm("");
        dispatch(setSearchResult(itemsArr));
    }, [itemsArr]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            performSearch(e.currentTarget.value);
        }
    };

    const performSearch = (searchTerm: string) => {
        const filteredItems = itemsArr.filter(item => item.name.includes(searchTerm));
        dispatch(setSearchResult(filteredItems));
    };

    const handleGridChange = (newColumns: number) => {
        setGridColumns(newColumns);
    };

    return (
        <HomeContainer>
            <NavBar>
                <SearchInput
                    type="text"
                    placeholder="Search with item name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => handleGridChange(4)}>4 열</button>
                <button onClick={() => handleGridChange(5)}>5 열</button>
            </NavBar>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <ItemGrid style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}>
                    {searchResult.length > 0 ? (
                        searchResult.map((item) => <ItemCard key={item.id} item={item} />)
                    ) : (
                        <div>No items available</div>
                    )}
                </ItemGrid>
            )}
        </HomeContainer>
    );
}

export default Home;
