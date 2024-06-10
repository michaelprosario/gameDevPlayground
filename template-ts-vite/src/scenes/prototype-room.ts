import * as ex from "excalibur";

import { Block1 } from "../actors/block1";
import { Player, PlayerDirection } from "../actors/player";
import { SpriteFusionTileMapData } from "../interfaces/sprite-fusion-tile-map-data";
import { SpriteFusionTileMapLoader } from "../services/sprite-fusion-tile-map-loader";

export class ProtoTypeRoom extends ex.Scene {
    block1!: Block1;
    player!: Player;
    blocks!: Block1[];

    async onInitialize(engine: ex.Engine) 
    {
        this.blocks = [];

        const tileMapLoader = new SpriteFusionTileMapLoader();
        let tileMapData: SpriteFusionTileMapData
        tileMapData = await tileMapLoader.loadTileMap("/src/maps/spriteFusionMap.json");
        
        for(let tile of tileMapData.layers[0].tiles)
        {            
            if(tile.id==="40")
            {
                const block = new Block1(tile.x, tile.y);
                this.add(block);
                this.blocks.push(block);    
            }
        }
        
        // this.createRandomRoom();             

        this.player = new Player();
        this.add(this.player);
        this.handleInput(engine);
    }

    // private createRandomRoom() {
    //     let cellRowCount = 30;
    //     let cellColCount = 60;

    //     for (let i = 0; i < 250; i++) {

    //         let cellRow = Math.floor(Math.random() * cellRowCount);
    //         let cellCol = Math.floor(Math.random() * cellColCount);

    //         const block = new Block1(cellRow, cellCol);
    //         this.add(block);
    //         this.blocks.push(block);
    //     }
    // }

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
        this.player.movePlayerInDirection(direction);
    }    
}
