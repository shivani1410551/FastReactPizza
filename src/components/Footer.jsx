import Order from "./Order";
const Footer = () => {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  return (
    <div className="footer">
      {isOpen ? (
        <Order closeHour={closeHours} />
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHours}:00
        </p>
      )}
    </div>
  );
};

export default Footer;
