import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({
  backgroundImage,
  zIdx,
  marginl,
  marginT,
  bottom,
  txt,
  anim: { visX, visY, hidX },
  subHead,
  animated,
  hStyle: { fSize, fWeight, lHeight, tAlign, width, transformY },
}) => {
  const [pos, setPos] = useState();
  const [opacity, setOpacity] = useState(0);
  const ref = useRef();
  const [visible, setVisible] = useState({
    x: visX,
    y: visY,
  });

  const variant = {
    visible: {
      y: visible.y,
      x: visible.x,

      transition: {
        type: "tween",
        duration: 1.5,
      },
    },
    hidden: {
      y: -2000,
      x: hidX,
    },
  };

  const motionStyle = {
    marginLeft: `${marginl && marginl}`,
    zIndex: zIdx,
    background: `url(${backgroundImage}) no-repeat center center/cover`,
    bottom: `${bottom && bottom}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    height: "600px",
    width: "600px",
    marginTop: marginT ? marginT : "100px",
    position: "sticky",
  };

  const headingStyle = {
    transform: animated
      ? ` translateX(50%) rotateZ(${pos}deg)`
      : `translateX(50%) translateY(350px)`,
    opacity: animated && `${opacity}`,
    fontSize: fSize,
    fontWeight: fWeight,
    lineheight: lHeight,
    textAlign: tAlign,
    maxWidth: width,
  };

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rect = ref.current.getBoundingClientRect();
      setPos(-scale(rect.top, 400, 800, 0, 10));
      setOpacity(scale(rect.top + 250, 150, 20, 1, 0));
    });

    setTimeout(() => {
      setVisible({ y: 0, x: 0 });
    }, 4000);
  }, [visible, pos, opacity]);

  return (
    <motion.div
      ref={ref}
      style={motionStyle}
      animate="visible"
      initial="hidden"
      variants={variant}
    >
      <h1>
        <Link className="item-link" style={headingStyle} to="/">
          {txt}
        </Link>
      </h1>
      {subHead && (
        <p
          style={{
            transform: `translateY(${transformY})`,
            fontSize: "24px ",
            textAlign: "left",
            width: "100%",
          }}
        >
          {subHead}
        </p>
      )}
    </motion.div>
  );
};

export default Card;
