// function Card(props) {
function Card({id, content, title}) {
  return (
    <div className="card">
      <div className="card__content">{content}</div>
      <h4 className="card__title">{title}</h4>
    </div>
  );
}

export default Card;
