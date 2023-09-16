import Router from "next/router";
import LoginButton from "./Login";
export default function NavBarHome(){
    return(
        <div className="container-fluid bg-primary p-4 d-flex justify-content-around ">
            <button className="btn btn-light" onClick={()=>Router.push('addNotes')}> Add Note</button>
            <LoginButton/>
        </div>
    );
}