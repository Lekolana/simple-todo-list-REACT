import React, {useState } from "react";

  
export const  InputArea: React.FunctionComponent<{ addItem:(itemText: string) => void}> = (props) => {

  const [inputText, setInputText] = useState<string > ("");

  const selectChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
    const value = event.target.value;
    setInputText(value);
  }

  const onButtonClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    props.addItem(inputText); 
    setInputText("");

  }

  return (
    <div className="form">
      <input onChange={selectChange} type="text" value={inputText} />
      <button onClick={onButtonClick}
      >
        <span>Add</span>
      </button>
    </div>
  );
}




export default InputArea;
