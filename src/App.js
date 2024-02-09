import "./App.css";
import Form from "./components/Form";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.value;
    console.log(input);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">Add new Activity</header>
        <Form onAddActivity={handleSubmit} />
      </div>
    </>
  );
}

export default App;
