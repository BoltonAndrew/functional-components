function Card({ children }) {
  console.log(children);

  return (
    <div>
      <h3>Details</h3>
      {children}
    </div>
  );
}

export default Card;
