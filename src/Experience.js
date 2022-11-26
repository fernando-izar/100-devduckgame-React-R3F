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
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      <color args={["#bdedfc"]} attach="background" />

      <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level
          count={blocksCount}
          types={[BlockSpinner, BlockAxe, BlockLimbo]}
          seed={blocksSeed}
        />
        <Player />
      </Physics>
    </>
  );
}
