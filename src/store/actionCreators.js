import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from "./actionTypes";
// import axios from "axios/index";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});
export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});
/*
ReduxThunk-1
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list')
            .then((res) => {
                const data = res.data;
                const action = initListAction(data);
                dispatch(action);
            })
            .catch(() => {
                alert('error');
            })
    }
};*/

// ReduxSaga-7
export const getInitList = () => ({
    type: GET_INIT_LIST
});