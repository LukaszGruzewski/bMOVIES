import React from 'react';
import './style.css';

export default class MovieOfTheDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['tt0926084', 'tt1201607', 'tt0112573', 'tt0371746', 'tt1228705', "tt0111161", "tt0068646", "tt0071562", "tt0110912", "tt0060196", "tt0468569", "tt0050083", "tt0108052", "tt0167260", "tt0137523", "tt0080684", "tt0120737", "tt0073486", "tt1375666", "tt0099685", "tt0076759", "tt0047478","tt0109830", "tt0133093", "tt0167261", "tt0317248", "tt0114369", "tt0102926", "tt0064116", "tt0114814", "tt0082971", "tt0180093"],
            isLoaded: false,
            // random: Math.floor(Math.random() * 31),
            movie: [],
        }
    }


    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=${this.state.data[new Date().getDate()]}&apikey=e2dd964d`)
            .then((data) => data.json())
            .then(randFilm => {
                    this.setState({movie: randFilm, isLoaded: true})
                }
            )
    }

    render() {

        return (<div >
                <section id='MovieOfTheDay'>
                    <div className='container'>
                        <h1 className='title_day'>Movie of the day!</h1>
                        <div className='main_day'>
                            <div className='main_day_left'>
                                <h2><span>Title:</span> {this.state.movie.Title}</h2>
                                <p ><span>Cast:</span> {this.state.movie.Actors}</p>
                                <p style={{maxWidth: '80%'}}><span>Plot:</span> {this.state.movie.Plot}</p>
                            </div>
                            <div className='main_day_right'>
                                <img src={this.state.movie.Poster} alt=''/>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
