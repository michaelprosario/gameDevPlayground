import * as ex from "excalibur";

import { Block1 } from "../actors/block1";
import { Player, PlayerDirection } from "../actors/player";
import { SpriteFusionTileMapData, Tile } from "../interfaces/sprite-fusion-tile-map-data";
import { SpriteFusionTileMapLoader } from "../services/sprite-fusion-tile-map-loader";
import { Resources } from "../resources";
import { Door1 } from "../actors/door1";
import { Coin1 } from "../actors/coin1";
import { Key1 } from "../actors/key1";
import { IPlayerEventHandler } from "../interfaces/player-event-handler";
import { MapRoomTileType } from "./prototype-room";

export class ProtoTypeRoom2 extends ex.Scene implements IPlayerEventHandler {
    
    handleOpenDoor(door: Door1): void {
        console.log("open a door");
        console.log(door.sceneToLoad);
        this.engine.goToScene(door.sceneToLoad);
    }
    
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
        tileMapData = await tileMapLoader.loadTileMap("/src/maps/map3.json");
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
            this.makeTiles(tile);
        }
        
        // this.createRandomRoom();             

        this.player = new Player(this);
      
        this.add(this.player);
        this.handleInput(engine);
    }

    private makeTiles(tile: Tile) {
        switch(tile.id){
            case MapRoomTileType.BRICK_WALL:
                const block = new Block1(tile.x, tile.y, this.mapSpriteSheet);
                this.add(block);
                break;
            case MapRoomTileType.COIN1:
                const coin1 = new Coin1(tile.x, tile.y, this.mapSpriteSheet);
                this.add(coin1);
                break;
            case MapRoomTileType.DOOR1:
                const door1 = new Door1(tile.x, tile.y, this.mapSpriteSheet, "room2");
                this.add(door1);
                break;
            case MapRoomTileType.KEY1:
                const key1 = new Key1(tile.x, tile.y, this.mapSpriteSheet);
                this.add(key1);
                break;
            default:
                console.log("title.id = " + tile.id);
        }



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
