import React from "react";

interface IProps{
  key: number,
  id:number,
  text:string
  deleteItem: (id:number) => void;
}


export const ToDoItem:React.FC<IProps> = ({deleteItem ,id,text})=> {
  return (
    <div
      onClick={() => {
        deleteItem(id);
      }}
    >
      <li>{text}</li>
    </div>
  );
}

export default ToDoItem;
