import React from "react";
import Grid from "../animation/Grid";


function PolyGridAnimation() {
  return (
    <section className="w-full h-full min-h-screen relative flex items-center justify-center transition-colors duration-500">
      <Grid />
    </section>
  );
}

export default PolyGridAnimation;
