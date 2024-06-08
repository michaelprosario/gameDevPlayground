import { Actor, CollisionType, Sprite, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export enum PlayerState
{
  CanMove
}

export enum PlayerDirection
{
  Up, Left, Right, Down
}

export class Player extends Actor {

  state!: PlayerState;
  direction!: PlayerDirection;
  playerUpSprite!: Sprite;
  playerDownSprite!: Sprite;
  playerLeftSprite!: Sprite;
  playerRightSprite!: Sprite;

  constructor()
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
