// pages/product/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';
import itemMetadata from '../../types/itemMetadata';

export default function Product(item : itemMetadata) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            test123
        </div>
    );
}
