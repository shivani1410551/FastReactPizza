const Pizza = ({ data }) => {
  return (
    <div className={` ${data.soldOut ? "soldOut" : "null"}`}>
      <img src={data.image} alt={data.pizzaName} />
      <h2>{data.pizzaName}</h2>
      <p>{data.ingredients}</p>
      <span>{data.soldOut ? "SOLD OUT" : <p>{data.price}</p>}</span>
    </div>
  );
};

export default Pizza;
