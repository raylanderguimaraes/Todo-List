import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import List from './components/List';
import './Todo.css';
import Modal from './components/Modal';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import listReducer from './reducers/listReducer';



const SAVED_ITEMS = "savedItems"

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);

    if (actualState) {
        return JSON.parse(actualState)
    } else {
        return []
    }
}

const store = createStore(listReducer, loadState())

store.subscribe(() => {
    persistState(store.getState())
})

function App() {


    const [showModal, setShowModal] = useState(false)




    function onHideModal(e) {
        setShowModal(false)
    }


    return (

        <div className="container">

            <Provider store={store}>
                <header className="header"><h1>Todo</h1> <button onClick={() => { setShowModal(true) }} className="addButton">+</button></header>


                <List />

                <Modal show={showModal} onHideModal={onHideModal} >
                    <TodoForm onHideModal={onHideModal} />
                </Modal>
            </Provider>
        </div>

    )
}




export default App;

