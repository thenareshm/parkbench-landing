// app/page.tsx

import SceneWelcome from "@/components/SceneWelcome";
import SceneAcorns from "@/components/SceneAcorns";
import SceneFountain from "@/components/SceneFountain";
import SceneBench from "@/components/SceneBench";
import SceneWisdomGrove from "@/components/SceneWisdomGrove";
import SceneCTA from "@/components/SceneCTA";

export default function Home() {
  return (
    <>
      <SceneWelcome />
      <SceneAcorns />
      <SceneFountain />
      <SceneBench />
      <SceneWisdomGrove />
      <SceneCTA />

    </>
  );
}
