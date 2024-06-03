import Header from "./components/Header";
import CardList from "./components/CardList";

const logo = 'LogoName'
function App() {
  return (
    <>
      <Header logo={logo}/>
      <CardList />
    </>
  );
}

export default App;
