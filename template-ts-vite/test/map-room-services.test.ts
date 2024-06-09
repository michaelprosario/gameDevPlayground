import { MapRoomServices } from "../src/services/map-room-services"
import { SpriteFusionTileMapData } from "../src/sprite-fusion-tile-map-data";
import { getMap1 } from "./testData/map1";

test("mapRoomServices | load should work", () => {
    let service = new MapRoomServices()
    let input: SpriteFusionTileMapData = getMap1();
    let response = service.loadMapRoomFromSpriteFusion(input);
    console.log(response)

    expect(response.tiles.length > 0).toBe(true)

});