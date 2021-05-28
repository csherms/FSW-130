import React, { Component } from "react";

export class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // GETTING THE MEME DATA -- did mount just means it will check to see if displayed before fetching.
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  // SETTING UP THE EVENT HANDLER FOR THE INPUTS ON THE FORM IN THE RETURN
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  // FORM BUTTON IS ALREADY INSIDE OF THE FORM SO IT IS A SUBMIT BY DEFAULT -- SO, ON SUBMIT CAN GO ON THE FORM ITSELF
  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  }

  render() {
    return (
      <div>
        <form className='meme-form' onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='topText'
            placeholder='Top Text'
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='bottomText'
            placeholder='Bottom Text'
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate!</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImg} alt='#' />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
