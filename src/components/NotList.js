import React, { useState } from "react";
import NotForm from "./NotForm";
import Not from "./Not"

function NotList() {


  const [notes, setNotes] = useState([]);

// notEkle fonksiyon - işin eklenmesi
  const notEkle = not => {
    if (!not.text || /^\s*$/.test(not.text)) { // not değeri veya aradaki boşluğu engelleme
      return;
    }

    const newNotes = [not, ...notes];//eklenen notları spread özelliği ile array olarak tutma.
    setNotes(newNotes);
  };

    //  updateNote fonksiyon -  güncelleme işlemi

    const updateNote = (notId,newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) { // todo değeri veya aradaki boşluğu engelleme
            return;
    }
    setNotes(prev => prev.map(item => (item.id === notId ? newValue : item)));
}

  // removeNote fonksiyon -  silme işlemi

  const removeNote= id => {
      const removeArr = [...notes].filter(todo => todo.id!== id)
      setNotes(removeArr);
  }




// completeNote fonksiyon - Alınan not tamamlandığında notun üstüne tıkladığımızda notun tamamlandığını belirtmek için üstünü çizer
  const completeNote = (id) => {
    let updateNotes = notes.map(not => { // parametre olarak gelen değerin todo.id ile eşit ise... 
      if (not.id === id) {
        not.isComplete = !not.isComplete;
      }
      return not ;
    });
    setNotes(updateNotes);
  };


  // fonksiyon return
  return (
    <div>
      <h1>Not Listem
      </h1>
      <NotForm onSubmit={notEkle} className="not" />
      <Not 
      nots={notes} 
      completeNote={completeNote}  
      removeNote= {removeNote} 
      updateNote={updateNote}
      />
    </div>
  );
}

export default NotList;
