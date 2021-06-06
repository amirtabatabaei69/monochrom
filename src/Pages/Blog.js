import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 5rem;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin-right: 30px;
  margin-top: 30px;
`;

const HeadingM = styled.h3`
  font-size: 28px;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-weight: 100;
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
  text-transform: uppercase;
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
  background: url(${(props) => props && props.background}) center center/ cover;
  background-position-y: ${(props) =>
    props.backgroundPositionY && props.backgroundPositionY}%;

  top: ${(props) => props && props.top};
  left: ${(props) => props && props.left};
  right: ${(props) => props && props.right};
  height: 400px;
  width: 400px;
  z-index: 10;
  margin-bottom: 30px;
`;

const Contact = () => {
  const [pos, setPos] = useState();

  console.log(pos);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  const ChangeBackPos = () => {
    window.addEventListener("scroll", () => {
      // const rect = ref.current.getBoundingClientRect();
      setPos(scale(window.scrollY, 300, 500, 12, 20));
    });
  };

  useEffect(() => {
    ChangeBackPos();
  });

  return (
    <Section>
      <Container>
        <HeadingM>I want the connection</HeadingM>
        <HeadingB>
          Here Are Some Of My Writting
          <br /> Writting For You
        </HeadingB>
        <ImgContainer>
          <CardWrapper>
            <Card backgroundPositionY={pos} background="image/b-1.jpg"></Card>
            <HeadingS>inspiration</HeadingS>
            <HeadingM>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              provident?
            </HeadingM>
          </CardWrapper>
          <CardWrapper>
            <Card backgroundPositionY={pos} background="image/b-2.jpg"></Card>
            <HeadingS>inspiration</HeadingS>
            <HeadingM>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              asperiores.
            </HeadingM>
          </CardWrapper>
          <CardWrapper>
            <Card backgroundPositionY={pos} background="image/b-3.jpg"></Card>
            <HeadingS>inspiration</HeadingS>
            <HeadingM>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              adipisci?
            </HeadingM>
          </CardWrapper>
          <CardWrapper>
            <Card backgroundPositionY={pos} background="image/b-4.jpeg"></Card>
            <HeadingS>inspiration</HeadingS>
            <HeadingM>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, a!
            </HeadingM>
          </CardWrapper>
          <CardWrapper>
            <Card backgroundPositionY={pos} background="image/b-5.jpg"></Card>
            <HeadingS>inspiration</HeadingS>
            <HeadingM>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              minima!
            </HeadingM>
          </CardWrapper>
        </ImgContainer>

        <Form>
          <Input type="email" placeholder="Subscribe"></Input>
          <Submit></Submit>
        </Form>
      </Container>
    </Section>
  );
};

export default Contact;
