import { MapRoom } from "../entities/map-room";
import { MapRoomTile } from "../entities/map-room-tile";
import { SpriteFusionTileMapData } from "../interfaces/sprite-fusion-tile-map-data";

export class MapRoomServices
{
    loadMapRoomFromSpriteFusion(spriteFusionTileMapData: SpriteFusionTileMapData) : MapRoom
    {
        console.log(spriteFusionTileMapData);

        let mapRoom = new MapRoom();

        for(let layer of spriteFusionTileMapData.layers)
        {
            for(let tile of layer.tiles)
            {
                let mapRoomTile = new MapRoomTile();
                mapRoomTile.id = tile.id;
                mapRoomTile.x = tile.x;
                mapRoomTile.y = tile.y;
                mapRoomTile.spriteSheetId = tile.spriteSheetId;
                mapRoomTile.scaleX = tile.scaleX;
                mapRoomTile.tileType = 0;
                mapRoomTile.hasCollider = false;

                mapRoom.tiles.push(mapRoomTile);
            }
        }

        return mapRoom;
    }
}