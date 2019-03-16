import * as React from 'react';

import { SERVER_URL } from "./config";

import './App.css';
import logo from './logo.svg';

class App extends React.Component {

    public state = {
        name: 'World',
        message: null
    }

    public render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <4> */}
                    <form onSubmit={this.getMessage}>
                        <label>Enter your name: </label>
                        <input type="text" value={this.state.name} onChange={this.setName} />
                        <input type="submit" value="Submit" />
                    </form>

                    {/* <5> */}
                    <p>
                        { this.state.message ?
                            <strong>{this.state.message}</strong> :
                            <span>Edit <code>src/App.tsx</code> and save to reload.</span>
                        }
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>

            /*
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
            */
        );
    }

    private setName = (event: any) => this.setState({name: event.target.value});

    private getMessage = (mesg: any) => {
        mesg.preventDefault();
        fetch(`${SERVER_URL}/${this.state.name}`)
            .then(r => r.text())
            .then(message => this.setState({message}))
            .catch(error => console.error(error))
    };
}

export default App;
