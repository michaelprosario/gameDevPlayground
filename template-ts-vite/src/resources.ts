import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import block1File from "./images/block1.png";
import redUp from "./images/redUp.png";
import redDown from "./images/redDown.png";
import redLeft from "./images/redLeft.png";
import redRight from "./images/redRight.png";
import mapSpritesImage from "./images/MegaPixelArt32x32pxIcons_SpriteSheet.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Block1: new ImageSource(block1File),
  PlayerUp: new ImageSource(redUp),
  PlayerDown: new ImageSource(redDown),
  PlayerLeft: new ImageSource(redLeft),
  PlayerRight: new ImageSource(redRight),
  MapSpritesImage: new ImageSource(mapSpritesImage),
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) 
{
  loader.addResource(res);
}
