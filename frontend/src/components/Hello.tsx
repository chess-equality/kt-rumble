import * as React from 'react';

import './Hello.css';

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
}

function Hello({ name, enthusiasmLevel = 1 }: IProps) {

    if (enthusiasmLevel <=  0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <span><p className="greetReceiver">
            {name + getExclamationMarks(enthusiasmLevel)}
        </p></span>
    );
}

// Helpers

const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
};

export default Hello;
