function List() {// The .map() function creaes a new array populated with each modified elements from the old array. Modification instructions are placed after =>

    const fruits = ["apple","watermelon", "banana"];
    const listItems = fruits.map(fruit => <li>fruit</li>);
    return (
        <ul>{listItems}</ul>

    );
}

export default List;