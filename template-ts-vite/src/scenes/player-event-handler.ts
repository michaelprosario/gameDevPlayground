import { Coin1 } from "../actors/coin1";
import { Door1 } from "../actors/door1";
import { Player, PlayerData } from "../actors/player";
import { IPlayerEventHandler } from "../interfaces/player-event-handler";

export class PlayerEventHandler implements IPlayerEventHandler
{
    private player!: Player;

    constructor(
        private engine: ex.Engine, 
        private playerData: PlayerData
    )
    {

    }

    setPlayer(player: Player)
    {
        this.player = player;
    }   

    handleOpenDoor(door: Door1): void {
        console.log("open a door");
        console.log(door.sceneToLoad);
        this.engine.goToScene(door.sceneToLoad);
    }
    
    collectCoin1(aCoin: Coin1): void 
    {
        aCoin.kill();
        this.playerData.addCoins(1);
        console.log("coin count = " + this.playerData.getCountCount())
    }

}