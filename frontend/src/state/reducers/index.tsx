import { Reducer } from "redux";

import { IStoreState } from "../types";
import { EnthusiasmAction } from "../actions";
import { DECREMENT_ENTHUSIASM, INCREMENT_ENTHUSIASM } from "../constants";

export const enthusiasm: Reducer<any, EnthusiasmAction> = (state: IStoreState, action: EnthusiasmAction): IStoreState => {

    switch (action.type) {

        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };

        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    }

    return state;
};
