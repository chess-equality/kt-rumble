import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { SERVER_URL } from "./config";

import { IStoreState } from "./state/types";
import { enthusiasm } from "./state/reducers";
import { EnthusiasmAction } from "./state/actions";

import Hello from "./state/containers/Hello";

import './App.css';
import logo from './logo.svg';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

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
                    <div>
                        {(this.state.message && this.state.enthusiasmLevel > 0) ?
                            /*<strong>{this.state.message}</strong> :*/
                            <strong>
                                <Provider store={store}>
                                    <Hello />
                                    {/*<Hello name={this.state.message} enthusiasmLevel={this.state.enthusiasmLevel} />*/}
                                </Provider>
                            </strong> :
                            <span><p>Edit <code>src/App.tsx</code> and save to reload.</p></span>
                        }
                    </div>
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
