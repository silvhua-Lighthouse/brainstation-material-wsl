import Header from "./components/Header";
import CardList from "./components/CardList";
import CardForm from "./components/CardForm";
import {useState } from 'react';

const logo = 'LogoName'
function App() {

  const cardArray = [
    {id: "1", content: 'Content 1 updated', title: 'Title 1'},
    {id: "2", content: 'Content 2', title: 'Title 2'}
  ]
  const [cardContent, setCardContent] = useState(cardArray);

  const addCard = (content, title) => {
    const newCard = {
      content: content,
      title: title, 
      id: "3"
    }
    setCardContent([...cardArray, newCard]);
  }

  return (
    <>
      <Header logo={logo}/>
      <CardList cardContent={cardContent}/>
      <CardForm addCardHandler={addCard}/>
    </>
  );
}

export default App;
