import React from "react";
import Hbutton from "./buttons/h-button/Hbutton";

export function Home() {
  return (
    <section>
      <Hbutton
        child={<p>Botão</p>}
        backgroundColor='#6945c2'
      />
    </section>
  );
}