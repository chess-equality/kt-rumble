import * as React from 'react';

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
}

interface IState {
    currentEnthusiasm: number;
}

class StatefulHello extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    public render() {

        const { name } = this.props;
        
        if (this.state.currentEnthusiasm <=  0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <span>
                <p className="greetReceiver">
                    {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </p>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </span>
        );
    }

    public updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }

    private onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    private onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
}

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

export default StatefulHello;
