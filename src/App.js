// App.js
import './App.css';
import ContactMe from './Components/ContactMe';
import GameRallyCarousel from './Components/GameRallyCarousel';
import GameRallyDescription from './Components/GameRallyDescription';
import Hero from './Components/Hero';
import Skills from './Components/Skills';



function App() {
 
  return (

    <div>
    
    <div
    className="relative  w-full bg-cover bg-center text-white flex flex-col justify-start items-center pt-32"
    style={{ display :'flex' , justifyContent :'space-evenly' , flexDirection : 'row' ,backgroundImage: `url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a665c883-531f-491e-af67-198bb5206ea6/d3n15qk-e549fda4-cbdf-41fc-8936-77ef3f68f82b.jpg/v1/fill/w_900,h_390,q_75,strp/new_portfolio_background_by_larundel_d3n15qk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzkwIiwicGF0aCI6IlwvZlwvYTY2NWM4ODMtNTMxZi00OTFlLWFmNjctMTk4YmI1MjA2ZWE2XC9kM24xNXFrLWU1NDlmZGE0LWNiZGYtNDFmYy04OTM2LTc3ZWYzZjY4ZjgyYi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.d51p-Iu-wiJ1-slcJsbsVe7wK5Do9d2Us96DUqMASj8')` , height : '400px' }}
  >

        
        <Skills></Skills>
        <Hero></Hero>
        <ContactMe></ContactMe>
        
        
      </div>
      <div style={{ display :'flex', justifyContent :'end', marginRight :'20px', marginTop:'20px'}}>
      <GameRallyDescription></GameRallyDescription>
      <GameRallyCarousel></GameRallyCarousel>
      </div>
      <br></br>
      





      </div>



      
  )
}

export default App;
