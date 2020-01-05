import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { ITextButtonState, defaultDoWellButtonState, doWellButton,  } from './do-well-button/DoWellButton.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from "redux-persist/es/storage";
import { persistStore, persistReducer } from 'redux-persist'
import {PersistPartial} from 'redux-persist/es/persistReducer';

export interface IRootState {
    doWellButton: ITextButtonState;
}

const initialState: IRootState = {
    doWellButton: defaultDoWellButtonState,
};

const storeReducer = combineReducers<IRootState>({
    doWellButton,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, storeReducer);

const store = createStore<IRootState & PersistPartial, any, any, any>(
    persistedReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
);

const persistor = persistStore(store);

export { store, persistor };




