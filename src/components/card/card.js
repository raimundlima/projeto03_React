import React from 'react';
import Title from '../title/title';
import SubTitle from '../subtitle/subtitle';
import Image from '../image/image';
import Button from '../button/button';
import './../button/button.css';
import Video from '../modal/modal';
import './card.css'
class card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : this.props.title,
            subtitle : this.props.subtitle,
            image : this.props.image,
            
            button : this.props.button,
            embed : this.props.embed ,
            id : this.props.key,
            videoview : "none",
            buttonview : "none",  
            videoembed : "",          
        };
        this.showVideo = this.showVideo.bind(this);
        this.closeVideo = this.closeVideo.bind(this);
        
    }
    showVideo(){
       this.setState({ videoview: "flex" });
       this.setState({ buttonview: "block" });
        this.setState({ videoembed: this.state.embed });
    }
    closeVideo(){
        this.setState({ videoview: "none" });
        this.setState({ buttonview: "none" });
        this.setState({ videoembed: "" });
    }
    render(){
        
        return (
            
            
            <section className="card">
              
                <Image image = {this.state.image}/>
                <div>
                    <article><Title title = {this.state.title}/></article>
                    <article><SubTitle subtitle = {this.state.subtitle}/></article>
                    
                    <Button name="button" onClick={this.showVideo} button={this.state.button}/>
                </div>
                <Button name="close" onClick={this.closeVideo} style={{display : this.state.buttonview}} button="X"/>
                <Video view = {this.state.videoview} embed = {this.state.videoembed} id={this.state.id} ></Video>
            </section>
         
        );
    }
}

export default card;