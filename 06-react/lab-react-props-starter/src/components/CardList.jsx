import Card from "./Card";

function CardList(props) {
  // create an array to store info for the 2 cards here
  // const cardArray = [
  //   {id: "1", content: 'Content 1 updated', title: 'Title 1'},
  //   {id: "2", content: 'Content 2', title: 'Title 2'}
  // ]
  const cardArray = props.cardContent;

  return (
    <section className="card-list">
      {/* replace the card below by using the Array .map method */}
      {/* <Card cardArray={cardArray[0]}/> */}
      {
        cardArray.map(card => <Card key={card.id} content={card.content} title={card.title}/>)
      }
      
    </section>
  );
}

export default CardList;
