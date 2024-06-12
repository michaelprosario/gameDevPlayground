import { Coin1 } from "../actors/coin1";
import { Door1 } from "../actors/door1";

export interface IPlayerEventHandler
{
    handleOpenDoor(door: Door1): unknown;
    collectCoin1(aCoin: Coin1): void;
};
