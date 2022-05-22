export const Card = ({ handleClick, id, name, image }) => (
  <div onClick={() => handleClick(id)} className="card">
    <img alt={name} src={image}></img>
    <div className="name">{name}</div>
  </div>
);
