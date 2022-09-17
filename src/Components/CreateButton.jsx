import { useState } from "react";

const CreateButton = ()=>{

    var [content, setContent] = useState('DefaultContent');

    return(
        <div>
            <p>Create a To-Do Item</p>
            <button type="button" 
                    class="btn btn-primary" 
                    onClick={()=>setContent(content = "You clicked a button")}>Create</button>
            <p> Button clicked to set content: {content}</p>
        </div>
    );
};

export default CreateButton;