import React, { useEffect } from 'react';
import Link from "next/link";
import Image from 'next/image';
import styled from '@emotion/styled';
import itemMetadata from '../types/itemMetadata';

const ImageTitle = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemName = styled.p`
  font-size: large;
`;

interface ItemCardProps {
    item: itemMetadata;
}


const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <div className="card">
            <Link href={`/item/${item.id}`}>
                <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.name}
                    className="rounded shadow object-cover h-96 w-full"
                />
            </Link>
            <ImageTitle>
                <ItemName className="text-lg">{item.name}</ItemName>
            </ImageTitle>
        </div>
    );
};

export default ItemCard;







