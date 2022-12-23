import React from 'react';
import Card from './Card'
import { CheckCircle, Trash, Circle } from 'phosphor-react';

function DoneImg(props) {
    if (props.done) {
        return (<CheckCircle color="blue" size={20} />)
    } else {
        return (< Circle color="red" size={20} />)
    }
}



function ListItem(props) {



    return (
        <li >

            <Card className={props.item.done ? "done item" : "item"} >

                {props.item.text}

                <div className="buttons">
                    <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done} /></button>

                    <button onClick={() => { props.onItemDeleted(props.item) }}><Trash color="black" size={20} /></button>
                </div>
            </Card>
        </li>

    )
};

export default ListItem;