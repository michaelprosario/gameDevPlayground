export interface SpriteFusionTileMapData {
    id:           string;
    name:         string;
    description:  string;
    tileSize:     number;
    mapWidth:     number;
    mapHeight:    number;
    spriteSheets: SpriteSheets;
    layers:       Layer[];
    settings:     Settings;
}

export interface Layer {
    id:          string;
    name:        string;
    description: string;
    tiles:       Tile[];
    collider:    boolean;
}

export interface Tile {
    id:            string;
    x:             number;
    y:             number;
    spriteSheetId: string;
    scaleX:        number;
}

export interface Settings {
    showGrid:        boolean;
    GBStudioMode:    boolean;
    backgroundColor: string;
}

export interface SpriteSheets {
    "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6": string;
}
