import { Engine } from "excalibur";
import { loader } from "./resources";
import { ProtoTypeRoom } from "./scenes/prototype-room";
import { ProtoTypeRoom2 } from "./scenes/prototype-room2";
import { PlayerData } from "./actors/player";

class Game extends Engine {
    constructor() {
      super({width: 1200, height: 700});
    }
    initialize() {

      let playerData = new PlayerData();
      const protoTypeRoom = new ProtoTypeRoom();
      protoTypeRoom.setPlayerData(playerData);
      this.addScene("main", protoTypeRoom);

      const prototypeRoom2 = new ProtoTypeRoom2();
      prototypeRoom2.setPlayerData(playerData);
      this.addScene("room2", prototypeRoom2);
      this.goToScene("main");

      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();