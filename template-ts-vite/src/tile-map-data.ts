export interface TileMapData {
    tileSize:  number;
    mapWidth:  number;
    mapHeight: number;
    layers:    Layer[];
}

export interface Layer {
    name:     string;
    tiles:    Tile[];
    collider: boolean;
}

export interface Tile {
    id: string;
    x:  number;
    y:  number;
}