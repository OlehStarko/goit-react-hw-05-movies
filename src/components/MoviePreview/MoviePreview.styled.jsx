import styled from '@emotion/styled';

export const MovieListItem = styled.li`
  position: relative;
  width: calc((100% - 32px * 4) / 4);
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 32px;
  float: left;
  list-style: none;
`;

export const MovieListImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transform: scale(1);
  transition: all 0.2s;

  :hover {
    // box-shadow: 0px 0px 16px rgba(230, 50, 75, 0.5);
    transform: scale(1.02);
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const MovieListTitle = styled.p`
  color: #fff;
  text-align: center;
`;
export const MovieVote = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 25px;
  border-radius: 4px;
  background-color: #009432;
  color: #fff;
`;
