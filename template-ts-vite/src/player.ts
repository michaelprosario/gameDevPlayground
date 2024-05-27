import { Actor, Vector, vec } from "excalibur";
import { Resources } from "./resources";

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

  constructor()
  {
      super({
          pos: vec(60, 60),
          width: 16,
          height: 16
      })
  }

  onInitialize() 
  {
    this.state = PlayerState.CanMove;
    this.direction = PlayerDirection.Left;

    this.graphics.add(Resources.Block1.toSprite());
  }

  movePlayerInDirection(direction: PlayerDirection) {
    this.direction = direction;

    switch(this.direction){
      case PlayerDirection.Up:
        this.pos = this.pos.add(new Vector(0,-2));
        break;
      case PlayerDirection.Down:
        this.pos = this.pos.add(new Vector(0,2));
        break;
      case PlayerDirection.Left:
        this.pos = this.pos.add(new Vector(-2,0));
        break;
      case PlayerDirection.Right:
        this.pos = this.pos.add(new Vector(2,0));
        break;
      default:
        break;           
    }
  }

}
