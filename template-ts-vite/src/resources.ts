import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import block1File from "./images/block1.png";

export const Resources = {
  Sword: new ImageSource(sword),
  Block1: new ImageSource(block1File)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
