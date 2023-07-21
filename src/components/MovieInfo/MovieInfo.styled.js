import styled from '@emotion/styled';

export const MainInfo = styled.div`
  max-height: 450px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-gap: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;

export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  width: calc(100% - 320px);
  margin-bottom: 20px;
`;
