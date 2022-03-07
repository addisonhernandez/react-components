// Inside app.js, create a GroceryList component that contains an
// unordered list of 2 grocery items. Render this component to
// the div tag in index.html with an id of app

const GroceryListItem = (props) => (
  <li>{props.item}</li>
);

const GroceryList = (props) => {
  return (
    <ul>
      {props.items.map(item => <GroceryListItem item={item} />)}
    </ul>
  )
};

ReactDOM.render(<GroceryList items={['Frozen Pizza', 'Sea Salt Caramel Gelato']} />, document.getElementById('app'));