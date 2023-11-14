import React from "react";
import Menu from "./menu";
import AngelesArcangeles from "./paginas/AngelesArcangeles";

function App() {
  return (
    <div className="container pt-4">
      <Menu />

      <h2>Inicio</h2>
      <p>BIENVENIDO AL MUNDO HEXAGONAL</p>

      <AngelesArcangeles
        nombre="Gabriel"
        img="/imagen/ruedadelzodiaco.jpg"
        href="https://www.canva.com/design/DAFzbqsv6sw/KTq8Mc7o3HWPit6S8hVyPw/watch?utm_content=DAFzbqsv6sw&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        mision="Ayuda a Equilibrar las Emociones"
      />

      <AngelesArcangeles
        nombre="Rafael"
        img="/imagen/numerosHexagonal.jpg"
        href="https://www.canva.com/design/DAFzbqsv6sw/KTq8Mc7o3HWPit6S8hVyPw/watch?utm_content=DAFzbqsv6sw&utm_campaign=designshare&utm_medium=link&utm_source=editor"
        mision="Médico por excelencia, sanando físicamente, emocional y mental"
      />

      

    </div>
  );
}

export default App;
