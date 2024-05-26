import * as ex from "excalibur";
import { Block1 } from "./block1";

export class ProtoTypeRoom extends ex.Scene {
    block1!: Block1;

    onInitialize(): void {
        this.block1 = new Block1();
        this.add(this.block1);

        //this.camera.strategy.elasticToActor(this.beetle, .8, .9);
    }
}
