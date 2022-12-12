import * as C from './styles';
import {useState, KeyboardEvent} from 'react'

type Props = {
    onEnter: (taskName: string) => void
}


export const ImputItem = ({onEnter}: Props) => {

    const [newTask, setNewTask] = useState('');
    const handleKeyUp = (e: KeyboardEvent) =>{
        if(e.code === 'Enter'&& newTask !== ''){
            onEnter(newTask);
            setNewTask('');
        }
    }

    return (
        <C.Container>
            <div className='image'> + </div>
            <input 
                type='text'
                placeholder='Add Todo'
                value={newTask}
                onChange={e=>setNewTask(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}