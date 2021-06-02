import React from "react";
import { Container, Text } from "../../styled";
import githubLogo from "../../assets/images/github.svg";
const imageStyle = {
  height: "20px",
  with: "20px",
  margin: "0 0 0 -3vw",
};
const Footer = () => {
  return (
    <Container
      direction="row"
      background="black"
      height="60px"
      align="center"
      position="absolute"
      bottom="0px"
    >
      <a
        href="https://github.com/NaveenMohanty/oexamination-frontend"
        target="_blank"
        rel="noreferrer"
      >
        <Container
          direction="column"
          width="250px"
          justify="center"
          margin="15px 0  0 3vw"
        >
          <img style={imageStyle} src={githubLogo} alt="" />
          <Text size="12px" color="white">
            Go to GitHub Repository of this website
          </Text>
        </Container>
      </a>
    </Container>
  );
};

export default Footer;