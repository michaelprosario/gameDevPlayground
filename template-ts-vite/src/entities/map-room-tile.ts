export class MapRoomTile
{
    id: string;
    x: number;
    y: number;
    spriteSheetId: string;
    scaleX: number;
    tileType: number;
    hasCollider: boolean;

    constructor()
    {
        this.id = "";
        this.x = 0;
        this.y = 0;
        this.spriteSheetId = "";
        this.scaleX = 0;
        this.tileType = 0;
        this.hasCollider = false;
    }
}