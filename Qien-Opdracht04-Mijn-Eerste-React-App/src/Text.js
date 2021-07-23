const Text =  (props) => {
  return <p> Hello {props.name || "-- geen naam bekend --"} </p>;
}

export default Text;
