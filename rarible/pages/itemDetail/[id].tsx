import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Product: React.FC = () => {
    const router = useRouter();
    const { id } = router.query; // URL에서 id 가져오기

    // Redux store에서 아이템 정보 가져오기
    const item = useSelector((state: RootState) =>
        state.item.items.find((item) => item.id === id)
    );

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {item ? (
                <>
                    <h1>{item.name}</h1>
                    <p>ID: {item.id}</p>
                    <img
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="rounded shadow object-cover h-96 w-full"
                    />
                    {/* 기타 아이템 정보를 여기에 추가 */}
                </>
            ) : (
                <div>Item not found</div>
            )}
        </div>
    );
};

export default Product;
