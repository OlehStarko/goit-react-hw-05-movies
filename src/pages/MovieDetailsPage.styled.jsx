import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieDetailsPageContainer = styled.div`
  display: flex;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;
export const MovieDetailsPageImgAndCastContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const MovieDetailsPageGoBackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100px;
  height: 40px;
  background-color: #e6324b;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;
  transform: scale(1);
  border: none;
  margin-bottom: 20px;
  font-size: 16px;

  &:hover {
    background-color: #b72035;
    transform: scale(1.05);
    cursor: pointer;
  }
`;
export const MovieDetailsPageImg = styled.img`
  border-radius: 10px;
  width: 300px;
`;
export const MovieDetailsPageCastReviewContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 16px;
  color: #fff;
  width: 140px;
  height: 40px;
  background-color: #e6324b;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;
  transform: scale(1);

  &:hover {
    background-color: #b72035;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const MovieDetailsPageInfoContainer = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;
export const MovieDetailsPageTitle = styled.p`
  color: #e6324b;
  font-size: 32px;
  font-weight: bold;
`;
export const MovieDetailsPageUserStoreTitle = styled.p`
  color: #fff;
  font-size: 24px;
`;
export const MovieDetailsPageOwerviewTitle = styled.p`
  color: #fff;
  font-size: 24px;
`;
export const MovieDetailsPageOwerview = styled.p`
  color: #fff;
  font-size: 16px;
`;
export const MovieDetailsPageGenresTile = styled.p`
  color: #fff;
  font-size: 24px;
`;
export const MovieDetailsPageGenres = styled.p`
  color: #fff;
  font-size: 16px;
`;
