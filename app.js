// TODO: Inside app.js, create a GroceryList component that contains an
// unordered list of 2 grocery items. Render this component to the div tag in
// index.html with an id of app

const FrozenPizza = () => (
  <li>Frozen Pizza</li>
);

const CaramelGelato = () => (
  <li>Sea Salt Caramel Gelato</li>
);

const GroceryList = () => (
  <ul>
    <FrozenPizza />
    <CaramelGelato />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));