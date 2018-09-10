import React, {Component} from 'react';

import ByUser from './ByUser';
import Random from './Random';




class Search extends Component {
    render() {
        return (
            <section id='Find a Movie!'>
                <div>
                    <ByUser/>
                    <Random/>
                </div>
            </section>
        );
    }
}

export default Search;