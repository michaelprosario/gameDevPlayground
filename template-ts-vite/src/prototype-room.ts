import * as ex from "excalibur";
import { Block1 } from "./block1";
import { Vector } from "excalibur";
import { Player, PlayerDirection } from "./player";

export class ProtoTypeRoom extends ex.Scene {
    block1!: Block1;
    player!: Player;

    onInitialize(engine: ex.Engine) 
    {
        this.block1 = new Block1();
        this.add(this.block1);

        this.player = new Player();
        this.add(this.player);

        /*
        const sheet = ex.SpriteSheet.fromImageSource({
            image: Resources.BeetleImage,
            grid: {
                spriteWidth: 64,
                spriteHeight: 64,
                rows: 1,
                columns: 3,
            },
        });
        */

        /*
        this.animation = ex.Animation.fromSpriteSheet(
            sheet,
            [0, 1, 2],
            100,
            ex.AnimationStrategy.PingPong
        );
        this.graphics.use(this.animation);
        */

        engine.input.keyboard.on("hold", (evt) => {
            let dir = PlayerDirection.Down;
            switch (evt.key) {
                case ex.Input.Keys.Left:
                    dir = PlayerDirection.Left;
                    break;
                case ex.Input.Keys.Right:
                    dir = PlayerDirection.Right;
                    break;
                case ex.Input.Keys.Down:
                    dir = PlayerDirection.Down;
                    break;
                case ex.Input.Keys.Up:
                    dir = PlayerDirection.Up;
                    break;
                default:
                    return;
            }

            //this.dir = dir;
            this.movePlayerInDirection(dir);
        });
    }

    /**
     * Direction is one of four values for down: (0, 1), left: (1, 0), up: (0, -1), or right: (-1, 0)
     * @param direction 
     */
    movePlayerInDirection(direction: PlayerDirection) 
    {
        console.log("moveInDirection...");
        console.log(direction);
        this.player.movePlayerInDirection(direction);
    }    
}
