

function App() {
  return (
  <div className="container">
    <div className="row">
      <div className="col-12"> 
<h1>React Post Form</h1>

      </div>

<div className="col-12">
<form>
<div className="row gy-3">

<div className=" col-12 col-md-4">

<label htmlFor="" className="form-label">
Autore
</label>
<input
type="text"
className="form-control"
placeholder="Autore" />

<label htmlFor="" className="form-label">
Titolo
</label>
<input
type="text"
className="form-control"
placeholder="Titolo" />

<label htmlFor="" className="form-label">
Pubblico
</label>
<div>
<input
type="checkbox"
className="form-check"
 />

</div>
</div>

<div className="col-12">
  <label htmlFor="" className="form-label">Testo</label>
<textarea name="" className="form-control" rows="4" placeholder="Testo"></textarea>

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
