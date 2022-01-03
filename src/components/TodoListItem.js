import './TodoListItem.scss';
import { MdDeleteOutline } from "react-icons/md";
import cn from 'classnames';

export default function TodoListItem({todo, onRemove, onToggle}){
    const { id,text, checked } = todo;
    return(
        <div className='TodoListItem'>
            <input type="checkbox" className={cn('checkbox',{checked})} onClick={()=>{onToggle(id)}}/>
            <div className='ch-div'>
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdDeleteOutline/>
            </div>
        </div>
    );
}