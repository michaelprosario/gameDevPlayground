import { TileMapData } from "./tile-map-data";

export class TileMapLoader
{
    async loadTileMap(fileName: string) : Promise<TileMapData>
    {
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData: TileMapData = await response.json();
        return jsonData;
    }
}