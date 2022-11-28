import { Physics } from "@react-three/rapier";
import { Level } from "./components/Level";
import Player from "./components/Player";
import Lights from "./components/Lights";
import useGame from "./stores/useGame.js";
import BlockSpinner from "./components/BlockSpinner";
import BlockLimbo from "./components/BlockLimbo";
import BlockAxe from "./components/BlockAxe";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      <color args={["#bdedfc"]} attach="background" />

      <Physics>
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
