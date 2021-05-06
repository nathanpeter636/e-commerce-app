import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CollectionTitle = styled.h2`
  width: 215px;
    margin-top: 50px;
    margin-bottom: 90px;
    font-size: 45px;
    text-transform: uppercase;
    font-style: italic;
    padding: 0 30px 5px 20px;
    border-bottom: solid 4px #d90013;
    border-radius: 65px 15px;
    
    
    max-width: fit-content;
    margin: auto;
    margin-bottom: 30px;
    color: rgb(0, 0, 0);

`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  & > div {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;