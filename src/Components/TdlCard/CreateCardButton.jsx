import { useState } from "react";

const CreateButton = ()=>{

    var [content, setContent] = useState('DefaultContent');
    
    var readContentFromInputText = () => {

        setContent(content = document.getElementById("tdl-content").value);
        console.log("Hello");
        return(
            <>
                <p>Hello This is me</p>
            </>
            // <>
            // <div class="card">
            //     <div class="card-body">
            //         {content}
            //     </div>
            // </div>
            // </>
            )
    }


    return(
        <>
        <div>
            <p>Create a To-Do Item</p>

            <div class="tdl-input">
                <input id="tdl-content" class="form-control form-control-lg" type="text" placeholder={content}></input>
            </div>
            
            <button type="button" 
                    class="btn btn-primary" 
                    onClick={readContentFromInputText}>Create
            </button>

        </div>
        
        </>
        
    );
};

export default CreateButton;