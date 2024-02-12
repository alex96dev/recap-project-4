import "./Form.css";

function Form({ onAddActivity, onChangeName, onChangeGoodWeather }) {
  return (
    <form id="App-form" className="App-form" onSubmit={onAddActivity}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" onChange={onChangeName}></input>
      <br />
      <br />
      <label htmlFor="good-weather">Good-weather activity </label>
      <input
        type="checkbox"
        id="good-weather"
        onClick={onChangeGoodWeather}
      ></input>
      <br />
      <br />
      <button className="App-button">Submit</button>
    </form>
  );
}

export default Form;
