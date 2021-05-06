import styled from "styled-components";

import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {

 height: 60px;
 padding: 10px;
 margin-bottom: 40px;

}
`;

export const LogoContainer = styled(Link)`
     font-size: 20px;
    height: 100%;
    width: 70px;
    padding: 40px 15px;
    text-transform: uppercase;
    font-style: italic;
    border-bottom: solid 4px #d90013;
    border-radius: 65px 15px;
    font-weight: 600;
    width: 150px;


    @media screen and (max-width: 800px) {

      width: 149px;
    padding: 10px 0px 0px;
    font-size: 18px;

    span {
      display: none;
    }

 

}

`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  @media screen and (max-width: 800px) {

    
    width: 130%;
   

}
`;


export const OptionLink = styled(Link)`

padding: 10px 12px;
  cursor: pointer;
  position: relative;
  

  ::before {
    position: absolute;
    content: "";
  width: 100%;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: #d90013;
  visibility: hidden;
  transform: scaleX(0);
  transition: all .3s ease-in-out 0s;
  }

  :hover:before {
    visibility: visible;
  transform: scaleX(1);
  }



`

