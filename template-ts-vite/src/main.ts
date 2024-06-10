import { Engine } from "excalibur";
import { loader } from "./resources";
import { ProtoTypeRoom } from "./scenes/prototype-room";

class Game extends Engine {
    constructor() {
      super({width: 1200, height: 700});
    }
    initialize() {

      const protoTypeRoom = new ProtoTypeRoom();
      this.addScene("main", protoTypeRoom);
      this.goToScene("main");

      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();