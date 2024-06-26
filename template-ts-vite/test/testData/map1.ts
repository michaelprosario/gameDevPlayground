import { SpriteFusionTileMapData } from "../../src/sprite-fusion-tile-map-data";

export function getMap1() : SpriteFusionTileMapData
{
    return {
        "id": "1",
        "name": "Untitled",
        "description": "No description",
        "tileSize": 16,
        "mapWidth": 512,
        "mapHeight": 304,
        "spriteSheets": {
            "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6": "data:image/png;base64,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"
        },
        "layers": [
            {
                "id": "6e85f17b-6b99-4250-8fb7-96d2ced33b92",
                "name": "Layer_0",
                "description": "",
                "tiles": [
                    {
                        "id": "40",
                        "x": 0,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 16,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 32,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 48,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 64,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 112,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 128,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 192,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 208,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 272,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 0,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 16,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 32,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 48,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 64,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 80,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 96,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 128,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 144,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 176,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 192,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 224,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 240,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 256,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 272,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 288,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 304,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 320,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 336,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 352,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 368,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 384,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 400,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 416,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 432,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 448,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 464,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 480,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 288,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 272,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 208,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 192,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 128,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 112,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 64,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 48,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 32,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 16,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 496,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 480,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 464,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 448,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 432,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 416,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 400,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 384,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 368,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 352,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 336,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 320,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 304,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 288,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 272,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 256,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 240,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 224,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 192,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 176,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 144,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 128,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 96,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 80,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 64,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 48,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 32,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 16,
                        "y": 0,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 448,
                        "y": 192,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 448,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 448,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 432,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 416,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 416,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 400,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 384,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 368,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 352,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 352,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 336,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 336,
                        "y": 192,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 336,
                        "y": 208,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 336,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 352,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 352,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 368,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 384,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 384,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 400,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 416,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 432,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 448,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 464,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 464,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 480,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 480,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 464,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 448,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 432,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 416,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 400,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 384,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 368,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 352,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 336,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 336,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 320,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 304,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 304,
                        "y": 112,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 304,
                        "y": 128,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 288,
                        "y": 128,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 288,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 288,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 288,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 320,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 304,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 304,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 288,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 272,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 256,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 240,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 224,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 208,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 192,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 128,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 112,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 224,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 224,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 240,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 240,
                        "y": 64,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 256,
                        "y": 64,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 272,
                        "y": 64,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 288,
                        "y": 64,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 304,
                        "y": 64,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 16,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 32,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 48,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 64,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 144,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 128,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 96,
                        "y": 80,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 128,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 144,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 176,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 176,
                        "y": 192,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 176,
                        "y": 208,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 96,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 112,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 128,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 144,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 160,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 176,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 208,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 192,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 176,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 160,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 144,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 144,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 128,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 112,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 96,
                        "y": 256,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 96,
                        "y": 240,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 96,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 80,
                        "y": 224,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    },
                    {
                        "id": "40",
                        "x": 80,
                        "y": 208,
                        "spriteSheetId": "20f3cab6-1d39-4e04-b5cd-efc1a920c8e6",
                        "scaleX": 1
                    }
                ],
                "collider": false
            }
        ],
        "settings": {
            "showGrid": true,
            "GBStudioMode": false,
            "backgroundColor": "#000000"
        }
    }
}