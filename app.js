// Inside app.js, create a GroceryList component that contains an
// unordered list of 2 grocery items. Render this component to
// the div tag in index.html with an id of app

const GroceryListItem = (props) => (
  <li>{ props.itemName }</li>
);

const FrozenPizza = () => (
  <GroceryListItem itemName='Frozen Pizza'/>
);

const CaramelGelato = () => (
  <GroceryListItem itemName='Sea Salt Caramel Gelato' />
);

const GroceryList = () => (
  <ul>
    <FrozenPizza />
    <CaramelGelato />
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));