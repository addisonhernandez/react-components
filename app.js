// TODO: Inside app.js, create a GroceryList component that contains an
// unordered list of 2 grocery items. Render this component to the div tag in
// index.html with an id of app


const GroceryList = function () {
  return (
    <ul>
      <li>Frozen Pizza</li>
      <li>Sea Salt Caramel Gelato</li>
    </ul>
  );
}

ReactDOM.render(GroceryList, document.getElementById('app'));