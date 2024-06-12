export enum ActorType {
    Player, Coin1, Door1, Block1,
    Key1
}

export interface IActorCommon
{
    actorType: ActorType
}