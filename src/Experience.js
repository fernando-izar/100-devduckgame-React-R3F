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
import useGame from "./stores/useGame.js";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);

  return (
    <>
      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level
          count={blocksCount}
          types={[BlockSpinner, BlockAxe, BlockLimbo]}
        />
        <Player />
      </Physics>
    </>
  );
}
