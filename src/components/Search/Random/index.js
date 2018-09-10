import './style.css';
import data from './data'
import React from "react";
import {Button} from 'reactstrap';

export default class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myRandMovie: "",
        }
    }


    randomHandler = () => {
        const randNumb = Math.floor(Math.random() * 100);
        this.setState({
            myRandMovie: data.properties[randNumb].title
        })
    }


    render() {


        return (
            <section>
                <div className='container'>
                    <div className='main_random'>
                        <h2>randomize</h2>
                        <div className='rand'>
                            <Button className='rand_button' color="secondary"
                                    onClick={this.randomHandler}>Randomize!</Button>
                            <div className='rand_film'>{this.state.myRandMovie}</div>
                        </div>
                    </div>
                </div>
            </section>
        )

    }
}