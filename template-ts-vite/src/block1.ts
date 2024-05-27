import { Actor, CollisionType, vec } from "excalibur";
import { Resources } from "./resources";

export class Block1 extends Actor
{
    constructor()
    {
        super({
            pos: vec(30, 30),
            width: 16,
            height: 16,
            collisionType: CollisionType.Fixed
        })

    }

    onInitialize() {
        this.graphics.add(Resources.Block1.toSprite());
        this.on('pointerup', () => {
          alert('yo');
        });
    }        

}