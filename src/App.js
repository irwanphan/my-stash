import Backdrop from "./components/Backdrop"
import Item from "./components/Item"
import Modal from "./components/Modal"

function App() {
  return <div>
    <h1>my stuff</h1>
    <Item title="the asdf" />
    <Item title="qwerty"/>
    <Item title="whutever"/>
    <Modal />
    <Backdrop />
  </div>;
}

export default App;
