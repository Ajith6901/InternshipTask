import React from 'react'
import Header from './Components/Header/Header'
import ImageSlider from './Components/ImageSlider/imageSlider';
import Services from './Components/Services/Services';
import Titles from './Components/Titles/Titles';
import Footer from './Components/Footer/Footer';
import APsp from './Components/APSP/APsp';
import SWP from './Components/SWP/SWP';
import HSC from './Components/HSC/HSC';
import map from "lodash/map";
import range from "lodash/range";
import "./App.css"
function App() {
  return (
    <div>
      <Header/>
      <ImageSlider/>
      <Services/>
      <Titles text ="Popular Service Products"/>
      <div>
      
      <div style={{ height:"10%" , width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(10), (_) => (
          <HSC />
        ))}
      </div>
    </div>
      <Titles text ="All Popular Service Providers"/>
      <APsp/>
      <Titles text ="Services We Provide"/>
      <SWP/>
      
      {/* <Footer/> */}
      
    </div>
  )
}

export default App