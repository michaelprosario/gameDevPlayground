import * as ex from "excalibur";

import { Block1 } from "../actors/block1";
import { Player, PlayerDirection } from "../actors/player";
import { SpriteFusionTileMapData, Tile } from "../interfaces/sprite-fusion-tile-map-data";
import { SpriteFusionTileMapLoader } from "../services/sprite-fusion-tile-map-loader";
import { Resources } from "../resources";
import { BaseRoom } from "./base-room";
import { PlayerEventHandler } from "./player-event-handler";

export class ProtoTypeRoom2 extends BaseRoom {
    
    override async onInitialize(engine: ex.Engine) 
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
        
        this.playerEventHandler = new PlayerEventHandler(this.engine);
        this.player = new Player(this.playerEventHandler);
        this.playerEventHandler.setPlayer(this.player);
        this.add(this.player);
        this.handleInput(engine);
    }

}
