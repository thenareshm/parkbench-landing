// app/page.tsx

import SceneWelcome from "@/components/SceneWelcome";
import SceneAcorns from "@/components/SceneAcorns";

export default function Home() {
  return (
    <>
      <SceneWelcome />
      <SceneAcorns />
    </>
  );
}
