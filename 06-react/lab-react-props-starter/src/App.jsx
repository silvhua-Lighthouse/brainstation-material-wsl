import Header from "./components/Header";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";

const logo = 'LogoName'
function App() {
  return (
    <>
      <Header logo={logo}/>
      <CardList />
      <CardForm />
    </>
  );
}

export default App;
