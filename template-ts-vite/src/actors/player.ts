import { Actor, CollisionType, PostCollisionEvent, Sprite, Vector, vec } from "excalibur";
import { Resources } from "../resources";
import { textChangeRangeIsUnchanged } from "typescript";
import { IActorCommon, ActorType } from "../interfaces/actor-common";
import { IPlayerEventHandler } from "../interfaces/player-event-handler";
import { Coin1 } from "./coin1";

export enum PlayerState
{
  CanMove
}

export enum PlayerDirection
{
  Up, Left, Right, Down
}

export class Player extends Actor implements IActorCommon
{
  actorType: ActorType = ActorType.Player;

  state!: PlayerState;
  direction!: PlayerDirection;
  playerUpSprite!: Sprite;
  playerDownSprite!: Sprite;
  playerLeftSprite!: Sprite;
  playerRightSprite!: Sprite;
  coinCount: number = 0;

  constructor(private playerEventHandler: IPlayerEventHandler)
  {
      super({
          pos: vec(60, 60),
          width: 16,
          height: 16, 
          collisionType: CollisionType.Active
      })

  }

  onInitialize() 
  {
    
    this.state = PlayerState.CanMove;
    this.direction = PlayerDirection.Left;

    this.playerDownSprite = Resources.PlayerDown.toSprite();
    this.playerLeftSprite = Resources.PlayerLeft.toSprite();
    this.playerUpSprite = Resources.PlayerUp.toSprite();
    this.playerRightSprite = Resources.PlayerRight.toSprite();

    this.graphics.add(this.playerDownSprite);

    this.on('postcollision', (event: PostCollisionEvent<Actor>) => {

      let otherActor = event.other as unknown as IActorCommon;
      if (otherActor.actorType === ActorType.Coin1) 
      {
        // let the parent scene know about getting rid of the coin
        this.playerEventHandler.collectCoin1(otherActor as Coin1)
      }
    });    
  }

  movePlayerInDirection(direction: PlayerDirection) {
    this.direction = direction;

    switch(this.direction){
      case PlayerDirection.Up:
        this.pos = this.pos.add(new Vector(0,-2));
        this.graphics.use(this.playerUpSprite);
        break;
      case PlayerDirection.Down:
        this.pos = this.pos.add(new Vector(0,2));
        this.graphics.use(this.playerDownSprite);
        break;
      case PlayerDirection.Left:
        this.pos = this.pos.add(new Vector(-2,0));
        this.graphics.use(this.playerLeftSprite);
        break;
      case PlayerDirection.Right:
        this.pos = this.pos.add(new Vector(2,0));
        this.graphics.use(this.playerRightSprite);
        break;
      default:
        break;           
    }
  }

}
