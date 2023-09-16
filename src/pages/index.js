import { useEffect } from "react";
import React, { useState } from 'react';
import NotesCards from "@/Components/NotesCards";
import NavBarHome from "@/Components/NavBarHome";
import { UserContext } from "@/Lib/UserContext";
import { useContext } from "react";

export default function Home() {

 
  const [notesData , setNotesData]=useState(null);
  const{user}=useContext(UserContext);
  const fetchingData = async(email)=>{
    try{
         
        
      const apiResponse = await firestore.collection('AllNotes').doc(email).collection('notes').get();
      const notesArray=[];
      apiResponse.docs.map(note =>{
        const {title,body} = note.data();
        const id = note.id;

        notesArray.push({
          title,
          body,
          id
        })
        //console.log(title,body,id);
      })
      
      setNotesData(notesArray);
      

    } catch(error){
      console.log("Error", error);
    }
  }
  useEffect( ()=>{
    if (user){
      fetchingData(user.email);
    }else{
      setNotesData(null);
    }
    },[user])
  return (
    <>
    <NavBarHome/>
    <div className="container d-flex justify-content-center flex-wrap">
      
        <NotesCards notes={notesData} />{
        notesData ?
        <NotesCards notes={notesData} />
        :<h3 className="display-4">Login</h3>
        }
        </div>
      
    </>
  )
  }