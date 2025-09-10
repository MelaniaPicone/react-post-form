import { useState } from "react";
import axios from "axios";

function App() {

const [formData, setFormData] = useState (
  {
   author: "",
   title: "",
   public: false,
   body: "", 
  }
);


const handleChange = (e) => {
const {value, name, type, checked } = e.target;
const newFormData = {
  ...formData,
  [name]: type === 'checkbox' ? checked : value,

};

setFormData(newFormData);
};

const handleSubmit = (e) => {
e.preventDefault();

axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData).then ((resp) => {console.log(resp.data)}).catch(err => console.log("errore" + err));


};


  return (
  <div className="container my-5">
    <div className="row">
      <div className="col-12"> 
<h1>React Post Form</h1>

      </div>

<div className="col-12">
<form onSubmit={handleSubmit}>
<div className="row gy-3">

<div className="col-12 col-md-4">

<label htmlFor="" className="form-label">
Autore
</label>
<input
type="text"
name="author"
value={formData.author}
className="form-control"
placeholder="Autore" 
onChange={handleChange}/>

<label htmlFor="" className="form-label">
Titolo
</label>
<input
type="text"
name="title"
value={formData.title}
className="form-control"
placeholder="Titolo" 
onChange={handleChange}/>

<label htmlFor="" className="form-label">
Pubblico
</label>
<div>
<input
type="checkbox"
name="public"
checked={formData.public}
className="form-check"
onChange={handleChange}
 />

</div>
</div>

<div className="col-12">
  <label htmlFor="" className="form-label">Testo</label>
<textarea name="body" id="body" value={formData.body} className="form-control" rows="4" placeholder="Testo"  onChange={handleChange}></textarea>

</div>

<div className="col-12">
<button className="btn btn-success">Salva</button>



</div>


</div>

</form>



</div>


    </div>
  </div>
  
  )
  

}

export default App
