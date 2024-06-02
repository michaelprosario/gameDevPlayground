import { SpriteFusionTileMapData } from "./sprite-fusion-tile-map-data";


// Class enables you to load map files from https://www.spritefusion.com/
export class SpriteFusionTileMapLoader
{
    async loadTileMap(fileName: string) : Promise<SpriteFusionTileMapData>
    {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData: SpriteFusionTileMapData = await response.json();
        return jsonData;
    }
}