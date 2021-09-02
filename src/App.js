import logo from './components/Movie Night-amico.png';
import Image from './components/image/image';
import './App.css';
import React from 'react';
import BoxItem from './components/card/card';
import Title from './components/title/title';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      filmes :[
      {
        id : 1,
        title : "Evil Dead",
        subtitle : "Uma Noite Alucinante - A Morte do Demônio",
        image : "https://http2.mlstatic.com/D_NQ_NP_619732-MLB40524768975_012020-O.jpg",
        embed : "https://www.youtube.com/embed/NL6mioAlpJk",
        button: "Trailer!"
      },{
        id : 2,
        title : "Pulp Fiction",
        subtitle : "Tempos de Violencia",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgdnAx4RcqdeSRes2ziir-xst2CwO0G99WDZHHTe1a3bQzlsxw",
        embed : "https://www.youtube.com/embed/tGpTpVyI_OQ",
        button: "Trailer!"
      },{
        id : 3,
        title : "Blade Runner",
        subtitle : "O Caçador de Androides",
        image : "https://upload.wikimedia.org/wikipedia/pt/b/bb/BladeRunner-P%C3%B4ster.jpg",
        embed : "https://www.youtube.com/embed/eogpIG53Cis",
        button: "Trailer!"
      },{
        id : 4,
        title : "Drive",
        subtitle : "Risco Duplo",
        image : "https://upload.wikimedia.org/wikipedia/pt/e/e6/Drive-P%C3%B4ster.jpg",
        embed : "https://www.youtube.com/embed/KBiOF3y1W0Y",
        button: "Trailer!"
      },{
        id : 5,
        title : "Drunk",
        subtitle : "Mais uma Rodada",
        image : "https://upload.wikimedia.org/wikipedia/pt/1/16/Druk.jpg",
        embed : "https://www.youtube.com/embed/r3jPVVvpQOA",
        button: "Trailer!"
      },{
        id : 6,
        title : "Poltergeist",
        subtitle : "O Fenômeno",
        image : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTmLMYzLiFUWVzHsMNvlazULrNjf40mhVkDZDEUwfJr96Ic-36l",
        embed : "https://www.youtube.com/embed/9eZgEKjYJqA",
        button: "Trailer!"
      }
    ]
  };
  }
  render(){
    const {filmes} = this.state;
    return (

      <div className="body">
    
        <header className="title">
            <div className="logo">
              <Image image={logo}/>
            </div>
            <Title title="Catalogo de Filmes!"/>
        </header>
        <section className="items">
          {filmes.map((docs) => (
            <BoxItem className='item' title = {docs.title} subtitle = {docs.subtitle} image = {docs.image}  button={docs.button} key = {docs.id} embed = {docs.embed}></BoxItem>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
