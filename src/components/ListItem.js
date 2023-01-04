import React from 'react';
import Card from './Card'
import { CheckCircle, Trash, Circle } from 'phosphor-react';
import { useDispatch } from 'react-redux';

import { deleteItem, changeDone } from '../actions/listAction'

function DoneImg(props) {
    if (props.done) {
        return (<CheckCircle color="blue" size={20} />)
    } else {
        return (< Circle color="red" size={20} />)
    }
}



function ListItem(props) {

    const dispatch = useDispatch()

    return (
        <li >

            <Card className={props.item.done ? "done item" : "item"} >

                {props.item.text}

                <div className="buttons">
                    <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done} /></button>

                    <button onClick={() => { dispatch(deleteItem(props.item.id)) }}><Trash color="black" size={20} /></button>
                </div>
            </Card>
        </li>

    )
};

export default ListItem;