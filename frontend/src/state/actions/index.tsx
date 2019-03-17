import * as constants from '../constants';

export interface IIncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface IDecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IIncrementEnthusiasm | IDecrementEnthusiasm;

export const incrementEnthusiasm = (): IIncrementEnthusiasm => ({
    type: constants.INCREMENT_ENTHUSIASM
});

export const decrementEnthusiasm = (): IDecrementEnthusiasm => ({
    type: constants.DECREMENT_ENTHUSIASM
});
