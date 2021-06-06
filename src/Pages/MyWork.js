import React, { useState, useEffect } from "react";
// import img from "../../image/img-1.jpg";
import "../components/Hero/Hero.css";
import Card from "../components/Card/Card";
import useBackground from "../hooks/usebackground";

const MyWork = () => {
  // const [backgroundColor, setBackgroundColor] = useState();
  const [backgroundColor, listenScrollEvent] = useBackground();

  // const listenScrollEvent = (e) => {
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
            <h3
              style={{
                zIndex: 200,
              }}
              className="medium-heading"
            >
              I craft the ambassador of the future
            </h3>
            <h1
              style={{
                zIndex: 200,
              }}
              className="large-heading"
            >
              My Selected Work
            </h1>

            <Card
              anim={
                {
                  // visX: 0,
                  // visY: 0,
                  // hidX: 0,
                }
              }
              hStyle={{
                fSize: 40,
                fWeight: "bold",
                lHeight: 1.5,
                tAlign: "left",
                width: "600px",
                transformY: "470px",
              }}
              zIdx="100"
              marginl={"100px"}
              marginT="200px"
              bottom={"-300px"}
              subHead="ipsum dolor sit amet consectetur adipisicing elit. Neque, vel"
              backgroundImage={"image/img-1.jpg"}
              txt="AreUHome+ Magazine Subscription"
            ></Card>
            <Card
              anim={
                {
                  // visX: -500,
                  // visY: -100,
                  // hidX: 0,
                }
              }
              hStyle={{
                fSize: 40,
                fWeight: "bold",
                lHeight: 1.5,
                tAlign: "left",
                width: "600px",
                transformY: "420px",
              }}
              bottom={"-800px"}
              subHead="ipsum dolor sit amet consectetur adipisicing elit. Neque, vel"
              marginl={"-700px"}
              marginT="400px"
              zIdx="9"
              txt="The Creative Exchange"
              backgroundImage={"image/img-2.png"}
            ></Card>

            <Card
              anim={
                {
                  // visX: 0,
                  // visY: -700,
                  // hidX: 0,
                }
              }
              hStyle={{
                fSize: 40,
                fWeight: "bold",
                lHeight: 1.5,
                tAlign: "left",
                width: "600px",
                transformY: "470px",
              }}
              txt="The power of AI in your home."
              subHead="ipsum dolor sit amet consectetur adipisicing elit. Neque, vel"
              zIdx="8"
              bottom={"-700px"}
              marginl={"700px"}
              backgroundImage={"image/img-3.jpg"}
            ></Card>

            <Card
              anim={
                {
                  // visX: 500,
                  // visY: -700,
                  // hidX: 0,
                }
              }
              hStyle={{
                fSize: 40,
                fWeight: "bold",
                lHeight: 1.5,
                tAlign: "left",
                width: "600px",
                transformY: "420px",
              }}
              txt="Pselitos superfood snacks"
              subHead="ipsum dolor sit amet consectetur adipisicing elit. Neque, vel"
              zIdx="7"
              bottom={"-800px"}
              marginl={"-700px"}
              backgroundImage={"image/img-4.jpg"}
            ></Card>

            <Card
              anim={
                {
                  // visX: 500,
                  // visY: -200,
                  // hidX: 0,
                }
              }
              hStyle={{
                fSize: 40,
                fWeight: "bold",
                lHeight: 1.5,
                tAlign: "left",
                width: "600px",
                transformY: "420px",
              }}
              txt="Awarness Through Design"
              subHead="ipsum dolor sit amet consectetur adipisicing elit. Neque, vel"
              zIdx="6"
              marginT="100px"
              marginl={"700px"}
              bottom={"-900px"}
              backgroundImage={"image/img-5.jpg"}
            ></Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
