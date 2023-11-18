import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styled from "@emotion/styled";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

const DetailLayout = styled.div`
  text-align: left; 
  margin: 16px; 
`;

const StyledH1 = styled.h1`
  text-align: left;
`;

const StyledP = styled.p`
  text-align: left; 
  width: 500px; 
  font-size: 1.2rem;
`;

const Product: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    // Redux store에서 아이템 정보 가져오기
    const item = useSelector((state: RootState) =>
        state.item.items.find((item) => item.id === id)
    );

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    // 이미지 스타일링
    const StyledImage = styled.img`
        width: 100%; 
        max-width: 600px; 
        height: auto; 
        object-fit: cover; 
        border-radius: 10px; 
    `;

    return (
        <CenteredContainer>
            <ContentWrapper>
                {item ? (
                    <>
                        <StyledImage
                            src={item.image}
                            alt={item.name}
                        />
                        <DetailLayout>
                            <StyledH1>{item.name}</StyledH1>
                            <StyledP>
                                <b>Description<br /><br /></b>
                                A brand for the metaverse. Built by the community.
                                <br />
                                Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future. Azuki holders receive access to exclusive drops, experiences, and more. Visit azuki.com for more details.
                                We rise together. We build together. We grow together.
                                <br /><br />
                                Ready to take the red bean?
                            </StyledP>
                        </DetailLayout>
                    </>
                ) : (
                    <div>Item not found</div>
                )}
            </ContentWrapper>
        </CenteredContainer>
    );
};

export default Product;
