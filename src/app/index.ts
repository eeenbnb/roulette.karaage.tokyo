import p5 from "p5";
import "../style/reset.css";
import "normalize.css";
import { Item } from "./types";
import { primaryColor, secondaryColor, tertiaryColor } from "./colors";
import { circleAnimation } from "./circleAnimation";
import { circleAnimationMoveLeft } from "./circleAnimationMoveLeft";

const sketch = (p: p5) => {
  let Items: Item[] = [];
  const initItem = (): Item[] => {
    return Array(26)
      .fill(0)
      .map(() => {
        return {
          pos: {
            x: p.windowWidth / 2,
            y: p.windowHeight / 4,
          },
          size: 40,
          color: secondaryColor,
        };
      });
  };

  let deg = 0;
  let degAdd = 0.025;
  let moveLeft = 0;

  let count = 0;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    Items = initItem();
  };

  p.draw = () => {
    p.background(p.color(primaryColor));
    if (count > 0 && count < 1000) {
      deg = circleAnimation(p, Items, deg, degAdd);
      degAdd += 0.00025;
    } else if (count > 1000 && count < 2000) {
      deg = circleAnimationMoveLeft(p, Items, deg, degAdd, moveLeft);
      moveLeft += 5;
    }

    count += 3;
    console.log(count);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketch);
