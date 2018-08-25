import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import {Input, Button, List} from 'antd';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import './style.css'
import 'antd/dist/antd.css';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

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
        return (
            <Fragment>
                <div style={{marginTop: '10px', marginLeft: '10px'}}>
                    <div>
                        <Input
                            value={this.state.inputValue}
                            placeholder='todo info'
                            style={{width: '300px', marginRight: '10px'}}
                            onChange={this.handleInputChange}
                        />
                        <Button
                            type={'primary'}
                            onClick={this.handleBtnClick}
                        >提交</Button>
                    </div>
                    <List
                        style={{marginTop: '10px', width: '300px'}}
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}
                    />
                </div>
                {/*<div>
                    <label htmlFor={'insertArea'}>输入内容</label>
                    <input id="insertArea"
                           className={'input'}
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <button className={'red-btn'} onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>{this.getTodoItems()}</ul>*/}
            </Fragment>
        );
    }

    /*componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                console.log(res);
                this.setState(() => ({
                    list: [...res.data]
                }))
            })
            .catch(() => {
                alert('error');
            })
    }*/

}

export default TodoList;
