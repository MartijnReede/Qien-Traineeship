import Foto from "./Foto";
import "./Lijst.css";

const Lijst = (props) => {
  return (
          <div>
            <h2>{props.title}</h2>
            <div className="lijst">
              <Foto picture="/img/Klimfoto01.jpg"/>
              <Foto picture="/img/Klimfoto02.jpg"/>
              <Foto picture="/img/Klimfoto03.jpg"/>
              <Foto picture="/img/Klimfoto04.jpg"/>
              <Foto picture="/img/Klimfoto05.jpg"/>
              <Foto picture="/img/Klimfoto06.jpg"/>
            </div>
          </div>
  );
}

export default Lijst;
