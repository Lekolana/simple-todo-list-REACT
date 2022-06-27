import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";


interface IItemState{
  id:number,
  text:string,
}

const App:React.FunctionComponent<IItemState> = () => {
  const [items, setItems] = useState<IItemState[]>([]);

  function addItem(inputText:string) {
    setItems([...items, 
      {
        text: inputText,
        id: items.length + 1
      }
    ])
  }

  function deleteItem(id:number) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem.text}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
