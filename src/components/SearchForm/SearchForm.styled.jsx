import styled from '@emotion/styled';

export const SearchFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

export const SearchFormBox = styled.form`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  max-width: 300px;

  border-radius: 6px;
  border: none;
  background-color: #fff;

  overflow: hidden;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font: inherit;
  font-size: 1rem;
  border: none;

  outline: none;
  padding-left: 10px;
  padding-right: 10px;

  &::placeholder {
    font: inherit;
    font-size: 1rem;
  }
`;

export const SearchFormButton = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  background-color: #e6324b;
  color: #fff;

  :hover {
    cursor: pointer;
    background-color: #c81b34;
  }
`;
export const MovieListContainer = styled.div``;

export const MovieListBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;
export const MovieListItem = styled.li`
  position: relative;
  width: calc((100% - 32px * 4) / 4);
  margin-right: 16px;
  margin-left: 16px;
  margin-bottom: 32px;
  float: left;
  list-style: none;
`;
