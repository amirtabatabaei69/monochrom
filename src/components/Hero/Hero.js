import React, { useState, useEffect } from "react";
// import img from "../../image/img-1.jpg";
import "./Hero.css";
import Card from "../Card/Card";

import useBackground from "../../hooks/usebackground";

const Hero = () => {
  // const [backgroundColor, setBackgroundColor] = useState();
  const [backgroundColor, listenScrollEvent] = useBackground();

  // const listenScrollEvent = () => {
  //   if (window.scrollY >= 400 && window.scrollY < 1200) {
  //     setBackgroundColor("rgb(0, 0, 0)");
  //   } else if (window.scrollY >= 800 && window.scrollY < 1485) {
  //     setBackgroundColor("rgb(75,76,83)");
  //   } else if (window.scrollY >= 1485 && window.scrollY < 2269) {
  //     setBackgroundColor("rgb(139,161,165)");
  //   } else if (window.scrollY >= 2269 && window.scrollY < 2962) {
  //     setBackgroundColor("rgb(187,189,189)");
  //   } else if (window.scrollY >= 2962) {
  //     setBackgroundColor("rgb(0, 0, 0)");
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, [listenScrollEvent]);

  return (
    <>
      <section id="hero" style={{ backgroundColor: backgroundColor }}>
        <div className="hero-container">
          <div
            className="item-container"
            style={{ backgroundColor: backgroundColor }}
          >
            <h3 style={{ zIndex: 200 }} className="medium-heading">
              I'm Amir - your expert partner for deluxe <br /> bespoke
              experiences
            </h3>
            <h1 style={{ zIndex: 200 }} className="large-heading">
              HELLO I’M A DESIGNER.
            </h1>

            <Card
              anim={{
                visX: -500,
                visY: -700,
                hidX: 0,
              }}
              hStyle={{}}
              zIdx="100"
              marginl={"100px"}
              bottom={"-300px"}
              backgroundImage={"image/img-1.jpg"}
              txt="AreUHome+ Magazine Subscription"
              animated={true}
            ></Card>

            <Card
              anim={{
                visX: -500,
                visY: -100,
                hidX: 0,
              }}
              hStyle={{}}
              bottom={"-300px"}
              zIdx="9"
              txt="The Creative Exchange"
              backgroundImage={"image/img-2.png"}
              animated={true}
            ></Card>

            <Card
              anim={{
                visX: 0,
                visY: -700,
                hidX: 0,
              }}
              hStyle={{}}
              txt="The power of AI in your home."
              zIdx="8"
              bottom={"-300px"}
              marginl={"100px"}
              backgroundImage={"image/img-3.jpg"}
              animated={true}
            ></Card>

            <Card
              anim={{
                visX: 500,
                visY: -700,
                hidX: 0,
              }}
              hStyle={{}}
              txt="Pselitos superfood snacks"
              zIdx="7"
              bottom={"-300px"}
              backgroundImage={"image/img-4.jpg"}
              animated={true}
            ></Card>

            <Card
              anim={{
                visX: 500,
                visY: -200,
                hidX: 0,
              }}
              hStyle={{}}
              txt="Awarness Through Design"
              zIdx="6"
              marginl={"100px"}
              bottom={"-300px"}
              backgroundImage={"image/img-5.jpg"}
              animated={true}
            ></Card>
          </div>
        </div>
      </section>

      {/* <Footer bgColor={backgroundColor}></Footer> */}
    </>
  );
};

export default Hero;
