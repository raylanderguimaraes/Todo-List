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



function List(props) {



    return (
        <ul className="listTask">
            {props.items.map(item => <li key={item.id}>

                <Card className={item.done ? "done item" : "item"} >

                    {item.text}

                    <div className="buttons">
                        <button onClick={() => { props.onDone(item) }}><DoneImg done={item.done} /></button>

                        <button onClick={() => { props.onItemDeleted(item) }}><Trash color="black" size={20} /></button>
                    </div>
                </Card>
            </li>)}
        </ul>
    )
};

export default List;