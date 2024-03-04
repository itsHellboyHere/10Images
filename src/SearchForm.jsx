import { useRef, useState } from "react"
import { useGlobalContext } from "./context";

const SearchForm = () => {
 const {setSearchTerm} = useGlobalContext()
const handleSubmit =(e)=>{
  e.preventDefault();
 const searchValue=e.target.elements.search.value;
 if(!searchValue){
  return;
 }
 setSearchTerm(searchValue);
}
  return (

    <section>
      <h1 className="title"><span id='title-1'>10</span> Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" className="form-input search-input" name="search" placeholder="mountains" ></input>
      <button type="submit" className="btn">search</button>
      </form>
    </section>
  )
}
export default SearchForm