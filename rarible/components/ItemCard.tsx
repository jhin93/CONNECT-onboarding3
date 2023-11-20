import React from 'react';
import Link from "next/link";
import itemMetadata from '../types/itemMetadata';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

// @emotion/styled를 사용하여 스타일을 정의합니다.
const StyledCard = styled(Card)`
  max-width: 345px;
  border-radius: 4px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

interface ItemCardProps {
    item: itemMetadata;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <div className="card">
            <Link href={`/itemDetail/${item.id}`}>
                <StyledCard>
                    <CardMedia
                        sx={{ height: 320 }}
                        image={item.image}
                        title="azukiItem"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future.
                        </Typography>
                    </CardContent>
                </StyledCard>
            </Link>
        </div>
    );
};

export default ItemCard;
