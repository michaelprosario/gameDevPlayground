import { MapRoom } from "../entities/map-room";
import { SpriteFusionTileMapData } from "../sprite-fusion-tile-map-data";

export class MapRoomServices
{
    loadMapRoomFromSpriteFusion(spriteFusionTileMapData: SpriteFusionTileMapData) : MapRoom
    {
        console.log(spriteFusionTileMapData);

        let mapRoom = new MapRoom();

        return mapRoom;
    }
}