import * as C from './App.styles';
import {useState} from 'react';
import {Item} from './types/item'
import { ListItem } from './components/ListItem';
import { ImputItem } from './components/ImputItem';

const App = () =>{
    const [list, setList] = useState<Item[]>([]);

    const handleTask = (taskName: string) =>{
        let newList = [...list];
        newList.push({
            id: list.length +1,
            name: taskName,
            done: false
        });
        setList(newList);
    }

    return (
        <C.Container>
            <C.Area>

                <C.Header> Todo List </C.Header>

                <ImputItem onEnter={handleTask}/>
                
                {list.map((item, index)=>(
                    <ListItem  key={index} item = {item} />
                ))}

            </C.Area>
        </C.Container>
    )
}

export default App;