import Pizza from "./Pizza";
import pizzaData from "./pizzaData";
const Main = () => {
  const pizzaLength = pizzaData;
  const numPizza = pizzaLength.length;
  const pizza = pizzaData.map((item, i) => {
    console.log(item);
    return <Pizza data={item} key={i} />;
  });
  return (
    <div className="main-data">
      <h2>Our Menu</h2>
      {pizza}
    </div>
  );
};

export default Main;
