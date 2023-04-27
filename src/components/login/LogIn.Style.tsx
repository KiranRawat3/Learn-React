import styled from "styled-components";
import { Card, Input, Button, Image, Checkbox, Typography } from "antd";
import { link } from "fs";

interface AppContainerProps {
  backgroundimg: string;
}
interface AppContainerLogo {
  logo: string;
}

export const AppContainer = styled.div<AppContainerProps>`
  //props passed in styled component
  background: url(${(props) => props.backgroundimg});
  background-size: cover;
  background-attachment: fixed;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
`;

export const AppCard = styled(Card)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  max-width: 50vh;
  border-radius: 0px;
  @media only screen and (max-width: 1920px) {
   
    width: 500px;
  
}

@media only screen and (max-width: 1280px) {
  
    width: 400px;

}

@media only screen and (max-width: 360px) {
  
    width: 320px;

}

`;

export const AppInput = styled(Input)`
  margin-top: 5px;
  height: 4vh;
  border: none;
  margin-bottom: 4px;
  border-bottom: 1.5px solid #333;
  border-radius: 0;
  &:hover {
    border-color: #129489;
  }
`;

export const AppButton = styled(Button)`
  border: none;
  margin-top: 5px;
  width: 100%;
  height: 35px;
  background-color: #129489;
  color: white;
  margin-bottom: 10px;
  border-radius: 0;
`;
export const AppLogoContainer = styled.div`
  width: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const AppLogo = styled.img`

  height: 138px;
  width: 140px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const AppLabel = styled.label`
  font-size:small;
  margin: 1px;
`;
export const AppCheckbox = styled(Checkbox)`
  margin: 3px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const AppLink = styled.a`
  color: #129489;
  font-size: small;
  text-decoration: underline;
`;
export const AppTitle = styled(Typography)`
  text-align: center;
  text-align: center;
  font-weight: bolder;
  color: #129489;
  font-size: 38px;
`;
