import styled from "styled-components";

import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
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

    &:hover {

      color: #d90013;
      border-bottom: solid 4px #000000;

    }

`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;


export const OptionLink = styled(Link)`

padding: 10px 15px;
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

