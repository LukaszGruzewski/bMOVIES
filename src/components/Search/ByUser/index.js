import './style.css';
import React  from "react";
import {InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';

export default class MovieOfTheDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            movies: [],
            searchInput: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }


    searchHandler = () => {
        this.state.searchInput.length > 0 ?
                fetch(`http://www.omdbapi.com/?s=${this.state.searchInput}&apikey=e2dd964d`)
                    .then((data) => data.json())
                    .then(userFilm => {
                        if (userFilm.Search && userFilm.Search.length > 0) {
                            this.setState({
                                movies: userFilm.Search, isLoaded: true
                            });
                        } else {
                            alert("No such movie!")
                        }

                    }) : alert("Please write something!")
    }


    render() {

        return (
            <section>
                <div className='container main_User'>
                    <h2>Search on your own!</h2>

                    <InputGroup>
                        <Input value={this.state.searchInput} onChange={this.onSearchChange}
                               placeholder="Search by title"
                        />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary" onClick={this.searchHandler}>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>


                    <div className='main_userSearch'>

                        {this.state.movies.map((movie, index) => {
                            return (<div key={index} className='single_element'>
                                    <div className='single_element_child'>
                                        <h3>{movie.Title}</h3>
                                        {movie.Poster.length > 4 ? <div className='last_element' style={{
                                                backgroundImage: `url(${movie.Poster})`}}></div> :

                                            <div className='last_element' style={{
                                                backgroundImage: `url(${'https://media.tenor.com/images/2e6dee33085d64e5e27c6cfb971ee6af/tenor.gif'})`}}></div>}
                                        <p>Type: {movie.Type}</p>
                                        <p>Year: {movie.Year}</p>
                                    </div>

                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </section>
        )

    }
}