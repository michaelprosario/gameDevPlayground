import { Actor, CollisionType, vec } from "excalibur";
import { Resources } from "./resources";
import { GameConstants } from "./game-constants";

export class Block1 extends Actor
{
    constructor(
        public x: number, 
        public y: number
    )
    {
        super({
            pos: vec(x, y),
            width: GameConstants.GridSize,
            height: GameConstants.GridSize,
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