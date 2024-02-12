import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import { uid } from "uid";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [inputName, setInputName] = useState("");
  const [booleanGoodWeather, setBooleanGoodWeather] = useState(false);
  const [inputs, setInputs] = useState({
    name: inputName,
    isForGoodWeather: booleanGoodWeather,
  });
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(inputs) {
    setActivities([...activities, { id: uid(), inputs }]);
  }

  console.log("aktis: ", activities);
  function handleSubmit(event) {
    event.preventDefault();
    handleAddActivity({
      name: inputName,
      isForGoodWeather: booleanGoodWeather,
    });

    // setInputs({ name: inputName, isForGoodWeather: booleanGoodWeather });
    // handleAddActivity(inputs);
    // console.log(inputName);
    // console.log(booleanGoodWeather);
    // console.log(inputs);
    // console.log(activities);
    document.getElementById("App-form").reset();
  }

  function handleChangeName(event) {
    setInputName(event.target.value);
  }
  function handleGoodWeather(event) {
    setBooleanGoodWeather(event.target.checked);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">Add new Activity</header>
        <List onActivities={activities} />
        <Form
          onAddActivity={handleSubmit}
          onChangeName={handleChangeName}
          onChangeGoodWeather={handleGoodWeather}
        />
      </div>
    </>
  );
}

export default App;
