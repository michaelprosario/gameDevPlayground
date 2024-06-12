import { Engine } from "excalibur";
import { loader } from "./resources";
import { ProtoTypeRoom } from "./scenes/prototype-room";
import { ProtoTypeRoom2 } from "./scenes/prototype-room2";

class Game extends Engine {
    constructor() {
      super({width: 1200, height: 700});
    }
    initialize() {

      const protoTypeRoom = new ProtoTypeRoom();
      this.addScene("main", protoTypeRoom);

      const prototypeRoom2 = new ProtoTypeRoom2();
      this.addScene("room2", prototypeRoom2);
      this.goToScene("main");

      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();