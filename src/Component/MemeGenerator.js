import React, { Component } from 'react'

class MemeGenerator extends Component {
    constructor() {
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/1bij.jpg",
            allImgMemes: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allImgMemes: memes })
            })
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allImgMemes.length)
        const randMemeImg = this.state.allImgMemes[randomNum].url
        this.setState({ randomImg: randMemeImg })
    }

    render() {
        return (
            <div >
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text Here"
                        onChange={this.handleChange} />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Botton Text"
                        onChange={this.handleChange} />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <div class="top">
                        <h1>{this.state.topText}</h1>
                    </div>
                    <div class="bottom">
                        <h1>{this.state.bottomText}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;
