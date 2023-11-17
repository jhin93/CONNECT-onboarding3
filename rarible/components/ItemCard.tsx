import React from 'react';
import Link from "next/link";
import itemMetadata from '../types/itemMetadata';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface ItemCardProps {
    item: itemMetadata;
}


const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <div className="card">
            <Link href={`/itemDetail/${item.id}`}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={item.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future.
                    </Typography>
                </CardContent>
            </Card>
            </Link>
        </div>
    );
};

export default ItemCard;







