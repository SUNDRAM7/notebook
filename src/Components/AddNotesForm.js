import { firestore } from "@/Lib/Firebase";
import { useContext } from "react";
import { UserContext } from "@/Lib/UserContext";
import { useRef } from "react";
import { toast } from "react-hot-toast";
export default function AddNotesForm(){
    const {user}=useContext(UserContext);
    const titleRef = useRef(null);
    const bodyRef=useRef(null);

    const buttonClickHandler=async(email) => {
        try{
            const title=titleRef.current.value
            const body= bodyRef.current.value 
            if (  title !== ''&& body!==''){
                await firestore.collection("AllNotes").doc(email).collection('notes').add({
                    title,
                    body
                })

                titleRef.current.value='';
                bodyRef.current.value='';
                toast.success("Note added successfully!");
            }else{
                toast.error('Title or  Body cannot be empty');
            }
            

        }catch(error){
            console.error('Error',error);  
            toast.error('Request Failed')
        }




        
        

    }

    return(
        <div className="form-control d-flex flex-column">
            <label htmlFor="title">Title</label>
            <input ref={titleRef} type='text' name='title'/>

            <label htmlFor="body">Body</label>
            <textarea ref={bodyRef} type='text' name='body'/>{
                user?
            
            <button className="btn btn-primary" onClick={() =>buttonClickHandler(user.email)}>Add Note</button>
                :
                <button className="btn btn-primary disabled" >Sign In To Add Notes</button>
        
        
        }
        
            </div>


    )

}