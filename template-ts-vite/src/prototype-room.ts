import * as ex from "excalibur";
import { Block1 } from "./block1";
import { Player, PlayerDirection } from "./player";

export class ProtoTypeRoom extends ex.Scene {
    block1!: Block1;
    player!: Player;
    blocks!: Block1[];

    onInitialize(engine: ex.Engine) 
    {
        this.blocks = [];

        let cellRowCount = 30;
        let cellColCount = 60;

        for (let i = 0; i < 200; i++) {
            
            let cellRow = Math.floor(Math.random() * cellRowCount);
            let cellCol = Math.floor(Math.random() * cellColCount);
                        
            const block = new Block1(cellRow, cellCol);
            this.add(block);
            this.blocks.push(block);
        }        

        this.player = new Player();
        this.add(this.player);
        this.handleInput(engine);
    }

    private handleInput(engine: ex.Engine<any>) {
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
