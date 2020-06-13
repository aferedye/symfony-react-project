import React, {Component} from 'react';
import axios from 'axios';

class Boutique extends Component {
  
    render() {
        return (
            <div className="App" ref={el => (this.div = el)}>
                <h1>Bienvenue dans notre Boutique</h1>
            </div>
        )
    }
}

export default Boutique;