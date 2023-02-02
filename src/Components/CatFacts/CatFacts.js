import React from "react";
import './CatFacts.css'

// function fetchCatFact() {
//     fetch("https://meowfacts.herokuapp.com/")
//             .then((res) => res.json())
//             .then((json) => json.data[0])
// }

class CatFacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            catinfo: 'Cats are cool animals.'
        };

        this.fetchCatFact = this.fetchCatFact.bind(this);
    }
    
    fetchCatFact() {
        fetch("https://meowfacts.herokuapp.com/")
            .then((res) => res.json())
            .then((json) => this.setState({catinfo: json.data[0]}))
    }

    render() {
        return (
            <div>
                <p>{this.state.catinfo}</p>
                <button onClick={this.fetchCatFact}>New Cat Fact!</button>
            </div>
        )
    }
}

export default CatFacts;