import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import block1File from "./images/block1.png";
import playerUp from "./images/knight-back.png";
import playerDown from "./images/knight-front.png";
import playerLeft from "./images/knight-left.png";
import playerRight from "./images/knight-right.png";
import mapSpritesImage from "./images/MegaPixelArt32x32pxIcons_SpriteSheet.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Block1: new ImageSource(block1File),
  PlayerUp: new ImageSource(playerUp),
  PlayerDown: new ImageSource(playerDown),
  PlayerLeft: new ImageSource(playerLeft),
  PlayerRight: new ImageSource(playerRight),
  MapSpritesImage: new ImageSource(mapSpritesImage),
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) 
{
  loader.addResource(res);
}
