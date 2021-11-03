import p5 from "p5";
import { Item } from "./types";
import { primaryColor, secondaryColor, tertiaryColor } from "./colors";

export const circleAnimationMoveLeft = (
  p: p5,
  Items: Item[],
  deg: number,
  degAdd: number = 0.025,
  moveLeft: number = 0
): number => {
  p.background(p.color(primaryColor));
  if (deg >= p.TWO_PI) {
    deg = 0;
  }
  deg += degAdd;

  Items.forEach((b, i) => {
    p.stroke(b.color);
    p.fill(b.color);
    p.circle(
      p.windowWidth / 2 +
        p.sin(deg + (p.TWO_PI / Items.length) * i) * 250 -
        moveLeft,
      p.windowHeight / 2 + p.cos(deg + (p.TWO_PI / Items.length) * i) * 250,
      b.size
    );
  });
  return deg;
};
