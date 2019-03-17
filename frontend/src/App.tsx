import * as React from 'react';

import { SERVER_URL } from "./config";

import './App.css';
import logo from './logo.svg';

import Hello from "./component/Hello";

class App extends React.Component {

    public state = {
        name: 'World',
        message: '',
        counter: 1,
        enthusiasmLevel: 1
    };

    public render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <4> */}
                    <form onSubmit={this.getMessage}>
                        <label>Enter your name: </label>
                        <input type="text" value={this.state.name} onChange={this.setName} />
                        <input type="text" value={this.state.counter} onChange={this.setCounter} />
                        <input type="submit" value="Submit" />
                    </form>
                    {/* <5> */}
                    <p>
                        {(this.state.message && this.state.enthusiasmLevel > 0) ?
                            /*<strong>{this.state.message}</strong> :*/
                            <strong><Hello name={this.state.message} enthusiasmLevel={this.state.enthusiasmLevel} /></strong> :
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
        );

        /*
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
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
        );
        */
    }

    private setName = (event: any) => this.setState({ name: event.target.value });

    private setCounter = (event: any) => this.setState({ counter: +event.target.value });

    private getMessage = (form: any) => {

        form.preventDefault();

        fetch(`${SERVER_URL}/${this.state.name}`)
            .then(r => r.text())
            .then(value => this.setState({ message: value, enthusiasmLevel: this.state.counter }))
            .catch(error => console.error(error));
    };
}

export default App;
