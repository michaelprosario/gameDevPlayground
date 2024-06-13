import * as ex from "excalibur";

import { Player } from "../actors/player";
import { SpriteFusionTileMapData } from "../interfaces/sprite-fusion-tile-map-data";
import { SpriteFusionTileMapLoader } from "../services/sprite-fusion-tile-map-loader";
import { Resources } from "../resources";
import { PlayerEventHandler } from "./player-event-handler";
import { BaseRoom } from "./base-room";

export class ProtoTypeRoom extends BaseRoom {
    
    override async onInitialize(engine: ex.Engine) 
    {
        const tileMapLoader = new SpriteFusionTileMapLoader();
        let tileMapData: SpriteFusionTileMapData
        tileMapData = await tileMapLoader.loadTileMap("/src/maps/map2.json");

        this.playerEventHandler = new PlayerEventHandler(this.engine, this.playerData);
        this.player = new Player(this.playerEventHandler);
        this.playerEventHandler.setPlayer(this.player);
        this.add(this.player);
 
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
              
        this.handleInput(engine);
    }
}
