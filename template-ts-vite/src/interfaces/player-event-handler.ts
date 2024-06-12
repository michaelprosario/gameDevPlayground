import { Coin1 } from "../actors/coin1";

export interface IPlayerEventHandler
{
    collectCoin1(aCoin: Coin1): void;
};
