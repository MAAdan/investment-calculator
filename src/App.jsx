import UserInput from "./components/UserInput"

function App() {
  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput label="Initial investment" />
        <UserInput label="Anual investment" />
      </div>
      <div className="input-group">
        <UserInput label="Expected return" />
        <UserInput label="Duration" />
      </div>
    </div>
  )
}

export default App
