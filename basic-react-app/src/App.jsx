
import "./App.css"
import Title from "./Title.jsx"
import ProductTab from "./ProductTab.jsx"
function App() { // component, all the components are sub component of APP component



  return(
    <>

    <Title />
    <Description /> 

    <ProductTab />


  </>
  )
}



function Description() {

  return (<h1>Am a discription component</h1>);

}

export default App
