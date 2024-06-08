import { Engine } from "excalibur";
import { loader } from "./resources";
import { ProtoTypeRoom } from "./scenes/prototype-room";

class Game extends Engine {
    constructor() {
      super({width: 800, height: 400});
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