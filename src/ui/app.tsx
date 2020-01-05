import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import { connect } from 'react-redux';
import { IRootState } from '../redux/RootStore';

import './app.scss';
import TextButton from "../components/TextButton";
import {processClick, setNormalAction} from "../redux/do-well-button/DoWellButton.actions";

import {Action} from "redux";
import {ThunkDispatch} from "redux-thunk";

interface IProps extends IStateProps, IDispatchProps {
    
}

interface IState {
    isBusy: boolean
    buttonText: string,
}

interface IStateProps {
    isBusy: boolean;
    buttonText: string;
}

interface IDispatchProps {
    onRequestClick: (arg: any) => {},
    setNormalAction: () => {},
}

type Props = IProps & IStateProps & IDispatchProps;

class AppBase extends Component<Props, IState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            ...props
        };
    }

    componentDidMount(): void {
        const {isBusy} = this.props;
        if(isBusy){
            this.props.setNormalAction();
        }
    }

    makeAllWell() {
        this.props.onRequestClick({});
    }

    public render() {
        const {buttonText, isBusy} = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="App-content">
                    <TextButton buttonText={buttonText} isBusy={isBusy} clickAction={this.makeAllWell.bind(this)} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IRootState): IStateProps => {
    return {
        isBusy: state.doWellButton.isBusy,
        buttonText: state.doWellButton.buttonText,
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, void, Action>) => {
    return {
        onRequestClick: () => dispatch(processClick({})),
        setNormalAction: () => dispatch(setNormalAction({}))
    };
};

const App = connect(mapStateToProps, mapDispatchToProps )(AppBase);

export { App, AppBase };
