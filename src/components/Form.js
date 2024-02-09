import "./Form.css";

function Form({ onAddActivity }) {
  return (
    <form className="App-form" onSubmit={onAddActivity}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name"></input>
      <br />
      <br />
      <label htmlFor="good-weather">Good-weather activity </label>
      <input type="checkbox" id="good-weather"></input>
      <br />
      <br />
      <button className="App-button">Submit</button>
    </form>
  );
}

export default Form;
