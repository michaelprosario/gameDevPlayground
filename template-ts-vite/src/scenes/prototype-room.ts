import * as ex from "excalibur";

import { Block1 } from "../actors/block1";
import { Player, PlayerDirection } from "../actors/player";
import { SpriteFusionTileMapData } from "../interfaces/sprite-fusion-tile-map-data";
import { SpriteFusionTileMapLoader } from "../services/sprite-fusion-tile-map-loader";
import { Resources } from "../resources";
import { Door1 } from "../actors/door1";
import { Coin1 } from "../actors/coin1";
import { Key1 } from "../actors/key1";
import { IPlayerEventHandler } from "../interfaces/player-event-handler";

export class MapRoomTileType
{
    static BRICK_WALL = "18";
    static DOOR1 = "117";
    static COIN1 = "17";
    static KEY1 = "373";
}

export class ProtoTypeRoom extends ex.Scene implements IPlayerEventHandler {
    
    collectCoin1(aCoin: Coin1): void 
    {
        aCoin.kill();
        this.player.coinCount += 1;
        
        console.log("coin count = " + this.player.coinCount)
    }

    block1!: Block1;
    player!: Player;
    mapSpriteSheet!: ex.SpriteSheet;

    async onInitialize(engine: ex.Engine) 
    {
        const tileMapLoader = new SpriteFusionTileMapLoader();
        let tileMapData: SpriteFusionTileMapData
        tileMapData = await tileMapLoader.loadTileMap("/src/maps/map2.json");
        console.log(tileMapData);

        this.mapSpriteSheet = ex.SpriteSheet.fromImageSource({
            image: Resources.MapSpritesImage,
            grid: {
                rows: 33,
                columns: 14,
                spriteHeight: 32,
                spriteWidth: 32
            }
          });
        
        for(let tile of tileMapData.layers[0].tiles)
        {            
            if(tile.id === MapRoomTileType.BRICK_WALL)
            {
                const block = new Block1(tile.x, tile.y, this.mapSpriteSheet);
                this.add(block);
            }
            else if(tile.id === MapRoomTileType.COIN1)
            {
                const actor = new Coin1(tile.x, tile.y, this.mapSpriteSheet);
                this.add(actor);
            }
            else if(tile.id === MapRoomTileType.DOOR1)
            {
                 const actor = new Door1(tile.x, tile.y, this.mapSpriteSheet);
                 this.add(actor);
            }
            else if(tile.id === MapRoomTileType.KEY1)
            {
                 const actor = new Key1(tile.x, tile.y, this.mapSpriteSheet);
                 this.add(actor);
            }
            else{
                console.log("title.id = " + tile.id);
            }
        }
        
        // this.createRandomRoom();             

        this.player = new Player(this);
      
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
        this.player.movePlayerInDirection(direction);
    }    
}
