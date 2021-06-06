import React from "react";
import styled from "styled-components";
// import img1 from "../../public/c-1";
// import img2 from "../../public/c-2";
// import img3 from "../../public/c-3";
// import img4 from "../../public/c-4";

const Section = styled.section`
  background: #000;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 5rem auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  position: relative;
  height: 120vh;
  width: 100%;
`;

const HeadingM = styled.h3`
  font-size: 32px;
  margin-bottom: 2rem;
  line-height: 1.5;
`;
const HeadingB = styled.h1`
  font-size: 82px;
  margin-bottom: 2rem;
  line-height: 1.7;
  text-align: center;
`;
const HeadingS = styled.h4`
  font-family: "Lato", sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
`;
const Link = styled.a`
  font-size: 24px;
  line-height: 1.7;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  justify-self: center;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70%;
`;
const Input = styled.input`
  margin-top: 20px;
  font-size: 28px;
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  color: #fff;
  background: transparent;
  padding: 2rem 0;
  height: ${(props) => (props ? props.height : "50px")};

  &::placeholder {
    color: #fff;
  }

  &:focus {
    background: #333;
  }
`;
const Submit = styled.input.attrs({
  type: "submit",
  value: "Submit",
})`
  position: absolute;
  bottom: -100px;
  right: 0;
  margin-top: 100px;
  display: inline-block;
  background: #fff;
  /* background: #af2d2f; */
  color: #000;
  border: none;
  outline: none;
  padding: 15px 60px;
  font-size: 18px;
  cursor: pointer;
`;
const Card = styled.img`
  background: url(${(props) => props && props.background}) center center/cover;
  position: absolute;
  top: ${(props) => props && props.top};
  left: ${(props) => props && props.left};
  right: ${(props) => props && props.right};
  height: 400px;
  width: 400px;
  z-index: 10;
`;
const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  align-items: center;
  justify-content: Center;
  grid-column-gap: 2rem;
`;

const Contact = () => {
  return (
    <Section>
      <Container>
        <HeadingM>I want the connection</HeadingM>
        <HeadingB>
          Let's Talk About Your
          <br /> Project
        </HeadingB>
        <ImgContainer>
          <Card left="-70px" top="-30px" background="image/c-1.jpg"></Card>
          <Card right="-20px" top="-100px" background="image/c-2.jpg"></Card>
          <Card left="-20px" top="400px" background="image/c-3.jpg"></Card>
          <Card right="200px" top="400px" background="image/c-4.jpg"></Card>
        </ImgContainer>
        <LinkWrapper>
          <HeadingS>Email ME :</HeadingS>
          <Link href="mailto:amirtaba69@gmail.com">Me@Gmail</Link>
        </LinkWrapper>
        <LinkWrapper>
          <HeadingS>Follow ME :</HeadingS>
          <Link target="_blank" href="https://twitter.com/Amir55518208">
            ME@Twitter
          </Link>
        </LinkWrapper>

        <Form>
          <Input placeholder="Full Name"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Phone"></Input>
          <Input height="100px" placeholder="Message"></Input>
          <Submit></Submit>
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;
