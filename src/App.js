// import Item from "./components/Item";
import Routes from "./routes";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return <div>
    <MainNavigation />
    <h1>my stuff</h1>
    {/* <Item title="the asdf" />
    <Item title="qwerty"/>
    <Item title="whutever"/> */}
    
    <Routes />
  </div>;
}

export default App;
