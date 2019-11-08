import React, {Component} from 'react';
import Heading from './components/Heading';
import Row from './components/Row';

class Headings extends Component{
    render() {
        return (
            <thead>
                <tr>
                    {
                        this.props.headings.map((heading, ind) => {
                            return (
                                <Heading key={ind} heading={heading} />
                            )
                        })
                    }
                </tr>
            </thead>
        )
    }
}

class Rows extends Component {
    render() {
        return(
            <tbody>
                {
                    this.props.change.map((row, ind) => {
                        return (
                            <Row key={ind} change={row} />
                        )
                    })
                }
            </tbody>
        )
    }
}

class App extends Component{

    componentDidMount(){
        const res = fetch('http://openlibrary.org/recentchanges.json?limit=10')
    }

    render () {
        console.log(this.props.data);
        
        return (
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">
                    <Headings headings={this.props.headings}/>
                    <Rows change={this.props.data} />
                </table>
            </div>
        )
    }
}

export default App;