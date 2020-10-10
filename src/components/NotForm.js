import React,{useState,useEffect,useRef} from 'react'



// Form görünümü 
function NotForm(props) {
const [input,setInput] = useState(props.edit ? props.edit.value : "");// güncelle butonuna tıkladığımız zaman içerisindeki değeri korur.Boş bırakırsak değeri temizler.

const inputRef = useRef(null)

useEffect(()=> {
inputRef.current.focus()
})
//Events
// input içerisindeki değer değiştiğinde e.target üzerinden veriye ulaşır.
const handleChange = e => {
    setInput(e.target.value)
}
// form içerisinde submit işlemi gerçekleştiğinde
const handleSubmit = e => {
    e.preventDefault(); // submit işlemi yapıldığında sayfa yenilememesi için yazıyoruz.

     props.onSubmit({
        id: Math.floor(Math.random()*1000),
        text:input
    });
    
    setInput(""); 
}
// ilk görünüm...
    return (
        <form className="not-form" onSubmit={handleSubmit}>
            {props.edit ? 
            (   
            <>
            <input
            type="text"
            placeholder="Güncellemek istediğiniz notunuz"
            value={input}
            name="text"
            className="not-input edit"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="not-button edit" >
                Güncelle
            </button>
            </>
            ) : ( 
                <>
             <input
            type="text"
            placeholder="Bir not ekleyin"
            value={input}
            name="text"
            className="not-input"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="not-button" >
                Ekle
            </button>
            </>
            )}
          
        </form>
    );
}

export default NotForm;
