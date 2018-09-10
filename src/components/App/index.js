import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from '../Navigation';
import Jumbotron1 from '../Jumbotron';
import MovieOfTheDay from '../MovieOfTheDay';
import Gallery from '../Gallery';
import Search from '../Search';
import Footer from '../Footer';

class Index extends Component {
    render() {
        return (
            <div className='bodyColor'>
                <Navigation/>
                <Jumbotron1/>
                <MovieOfTheDay/>
                <Gallery/>
                <Search/>
                <Footer/>
            </div>
        );
    }
}

export default Index;
