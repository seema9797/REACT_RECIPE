import logo from './logo.svg';
import './App.css';
import Axios from 'axios'
import React,{useState} from 'react'
import RecipesList from './components/RecipesList'
function App() { 
  const[query,setQuery]=useState()
  const[recipes,setRecipes]=useState([])
   const APP_ID="864dcba5"
   const App_Key="7321283e92bd498a3401844a0b2e9353"

    var url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${App_Key}`
      //var url=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${App_Key}&from=0&to=3&calories=591-722&health=alcohol-free`
      const getRecipes= async ()=>{
        var result=await Axios.get(url)
       setRecipes(result.data.hits);
        console.log(result.data.hits);
      }
      function onsubmitHandler(e){
        e.preventDefault()
        getRecipes()
      }
  return (
  
     <div className="app" onSubmit={onsubmitHandler}>
           <h1>FoOdy FOoD🍔</h1>
          <form className="app__searchForm">
        <input
          className="app__input"
          type="text" 
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="enter ingridient"
          autoComplete="Off"
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__recipes">
        {
          recipes.map((recipe,i)=>{
            <p key={i}></p>
            return<RecipesList recipe={recipe}/>
          })
        }
      </div>
    </div>
    );
  };

export default App;
