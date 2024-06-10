import { Actor, CollisionType, vec } from "excalibur";
import { Resources } from "../resources";
import { GameConstants } from "../game-constants";

export class Block1 extends Actor
{
    constructor(
        public x: number, 
        public y: number,
        private mapSpriteSheet: ex.SpriteSheet
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
        this.graphics.add(this.mapSpriteSheet.getSprite(4,1));
        this.on('pointerup', () => {
          alert('yo');
        });
    }        

}