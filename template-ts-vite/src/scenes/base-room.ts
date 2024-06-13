import * as ex from "excalibur";

import { Block1 } from "../actors/block1";
import { Player, PlayerData, PlayerDirection } from "../actors/player";
import { Tile } from "../interfaces/sprite-fusion-tile-map-data";
import { Door1 } from "../actors/door1";
import { Coin1 } from "../actors/coin1";
import { Key1 } from "../actors/key1";
import { MapRoomTileType } from "./map-room-type";
import { PlayerEventHandler } from "./player-event-handler";

export class BaseRoom extends ex.Scene {
    
    player!: Player;
    mapSpriteSheet!: ex.SpriteSheet;
    playerEventHandler!: PlayerEventHandler;
    playerData!: PlayerData;

    async onInitialize(engine: ex.Engine) 
    {
        console.log(engine);
        // override this method
    }

    setPlayerData(playerData: PlayerData)
    {
        this.playerData = playerData;
    }

    makeTiles(tile: Tile) {
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

    handleInput(engine: ex.Engine<any>) {
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
