import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './App.css';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Demo from './components/Demo';
function App() {
  const username="abc"
  let useraddress="wakad,pune"
  let a=10,b=20

  let products=[
    {name:"apple", color:"Red"},
    {name:"mango", color:"Yellow"},
    {name:"Green Apple", color:"Green"}
  ]

  let students = [
    {name:"Ayush", class:"sr.kg"} ,
    {name:"Aaradhya",class:"2nd"},
    {name: "Apoorva",class:"1st"}
  ]

  return (



    <div className="App">
      <ContactUs/>
    
      <Demo/>

      <h1>welcome</h1>
      <h2>userprofile:{username}</h2>
      <h2>useraddress:{useraddress}</h2>
      <h3>sum:{a+b}</h3>
      <ul> Fruits

      
        
      {products.map(produt => (  
          <li>  
            {produt.name}  - {produt.color}
          </li>  
        ))} 
          
        
      </ul>

      <ul>
          Students 
      {
        students.map(s1 =>(
            
            <li>  
              {s1.name} -{s1.class} 
            </li>  
          
          )  )
      } 
      </ul>
      
    </div>
  );
}

export default App;
