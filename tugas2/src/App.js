import Header from "./page/Header"
import { Component } from 'react';
import Footer from "./page/Footer";
import MenuUtama from "./page/MenuUtama";
import MenuTentangKami from "./page/MenuTentangKami";
import MenuMakanan from "./page/MenuMakanan";
import MenuKontak from "./page/MenuKontak";

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <MenuUtama/>
        <MenuMakanan/>

        <MenuTentangKami/>
        <MenuKontak/>
        <Footer />
      </div>
    );
  }
  
  
}

export default App;
