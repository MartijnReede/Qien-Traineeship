import "./Foto.css";

const Foto = (props) => {
  return (
        <figure>
            <img src={props.picture}/>
        </figure>
      );
}

export default Foto;
