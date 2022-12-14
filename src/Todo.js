import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import List from './components/List';
import './Todo.css';



function Todo() {

    const [items, setItems] = useState([])

    function onAddItem(text) {

        let it = new Item(text);

        setItems([...items, it])
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    function onDone(item) {

        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done;
            }
            return it;
        })

        setItems(updatedItems);
    }


    return (

        <div className="container">
            <h1>Todo List</h1>

            <TodoForm onAddItem={onAddItem} />

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items} />

        </div>

    )
}




export default Todo;

