import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IStoreState } from "../types";
import * as actions from '../actions/';

import Hello from '../../components/Hello';

export const mapStateToProps = ({ languageName, enthusiasmLevel }: IStoreState) => ({
    enthusiasmLevel,
    name: languageName,
});

export const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => ({
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
