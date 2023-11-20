import React from 'react';
import Link from "next/link";
import itemMetadata from '../types/itemMetadata';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { Skeleton } from '@closet-design-system/core-connect';

const StyledCard = styled(Card)`
  max-width: 345px;
  border-radius: 4px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const StyledCardContent = styled(CardContent)`
  height: 100%;
`

interface ItemCardProps {
    item: itemMetadata;
    loading: boolean
}

const ItemCard: React.FC<ItemCardProps> = ({ item , loading}) => {
    console.log('(ItemCard.tsx) loading:', loading);
    return (
        <div className="card">
            {loading ? (
                <Skeleton animation={"pulse"}>
                    <Skeleton.Box
                        max-width={"345px"}
                        borderRadius="4px"
                        className="Skeleton-Box"
                        height="520px"
                    />
                </Skeleton>
            ) : (
                <Link href={`/itemDetail/${item.id}`}>
                    <StyledCard>
                        <CardMedia
                            sx={{ height: 320 }}
                            image={item.image}
                            title="azukiItem"
                        />
                        <StyledCardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future.
                            </Typography>
                        </StyledCardContent>
                    </StyledCard>
                </Link>
            )}
        </div>
    );
};

export default ItemCard;
