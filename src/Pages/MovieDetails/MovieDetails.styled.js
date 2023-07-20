import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  width: 100px;
  display: block;
  padding: 4px;
  border: 1px solid #0f0f0f;
  border-radius: 8px;
  color: #0f0f0f;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    border-color: red;
    color: red;
  }
`;

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

export const AdditionalInfo = styled.div`
  padding: 20px 0;
  border-top: 1px solid #0f0f0f;
  border-bottom: 1px solid #0f0f0f;
`;
export const AdditionalTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
`;
