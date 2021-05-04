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
  height: 100%;
  width: 70px;
  padding: 25px;
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

