import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  align-items: center;

  @media screen and (max-width: 800px) {

    align-items: center;
    


  }
`;

export const TitleContainer = styled.h1`
  
      border-bottom: solid 4px #d90013;
    border-radius: 65px 15px;
    text-align: center;
    width: 160px;
    
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-style: italic ;
    transition: all 0.1s ease-out;

    &:hover {
      opacity: 0.6;
      transform: scale(1.2);
      transition: 0.3s ease;
    }
    

    
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;


  }
`;