import { Actor, CollisionType, vec } from "excalibur";
import { GameConstants } from "../game-constants";
import { ActorType, IActorCommon } from "../interfaces/actor-common";

export class Coin1 extends Actor implements IActorCommon
{
    actorType: ActorType = ActorType.Coin1;

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
        this.graphics.add(this.mapSpriteSheet.getSprite(3,1));
    }        
}