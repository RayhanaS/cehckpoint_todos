import React from 'react'
import {deleteHandler} from '../Redux/action'
import {useDispatch,useSelector} from 'react-redux'
function Todolist({todos}) {
    const dispatch = useDispatch()
    const removeHandler = (id) =>{
        dispatch(deleteHandler(id));
    }
    return (
        <div className="todolist">
            {todos.map((element, i) => 
            <div  key={i}>{element.text}
            <button>done</button>
            <button onClick={()=> removeHandler(element.id)}>delete</button>
            </div> 
            )}
        </div>
    )
}

export default Todolist
