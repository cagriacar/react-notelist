import React, { useState } from "react";
import NotForm from "./NotForm";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

//Listeye durumu ekle,sil,güncelle
function Not({nots,completeNote,removeNote,updateNote}) {

    //ilk state değeri
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  //Güncelleme öncesi ilk değer
const submitUpdate = value => {
    updateNote(edit.id,value)
    setEdit({
        id: null,
        value:""
    })
}
if (edit.id){
    return <NotForm edit={edit} onSubmit={submitUpdate}/>
}


  return nots.map((not, index) => (
    <div
      className={not.isComplete ? "not-row complete" : "not-row"}
      key={index}
    >
        <div className="not" key={not.id} onClick={() => completeNote(not.id)}>
            {not.text}
        </div>
    <div   className="icons" >
        <RiCloseCircleLine 
        onClick={() => removeNote(not.id)}
        className="delete-icon"
        />
        <TiEdit 
        onClick={() => setEdit({id:not.id,value : not.text})}
        className="edit-icon"
        />
    </div>
    </div>
  ));
}

export default Not;
