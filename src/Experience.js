import { Physics, Debug } from "@react-three/rapier";
import {
  BlockStart,
  BlockAxe,
  BlockEnd,
  BlockLimbo,
  BlockSpinner,
  Level,
} from "./Level.js";
import Player from "./Player.js";
import Lights from "./Lights.js";

export default function Experience() {
  return (
    <>
      <Physics>
        <Debug />
        <Lights />
        <Level count={5} types={[BlockSpinner, BlockAxe, BlockLimbo]} />
        <Player />
      </Physics>
    </>
  );
}
