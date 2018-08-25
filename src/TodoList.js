import React, {Component} from 'react';
import store from './store';
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    getTodoList
} from './store/actionCreators'
import TodoListUI from './TodoListUI';
import 'antd/dist/antd.css';

// 定义一个React组件
class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的state或者props发生变化时，render函数就会执行
        this.state = store.getState();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    // 父组件通过属性的形式向子组件传递参数，子组件通过props接受父组件传递的参数
    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    render() {
        return <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
        />;
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action);
    }

}

export default TodoList;
