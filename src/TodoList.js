import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css'

// 定义一个React组件
class TodoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }));
    }

    // 父组件通过属性的形式向子组件传递参数，子组件通过props接受父组件传递的参数

    handleDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }

    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return (<TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleDelete}
                />)
            })
        )
    }

    render() {
        return (
            <Fragment>
                <div>
                    {/*下面是一个input框*/}
                    {
                        // 来一个单行注释
                    }
                    <label htmlFor={'insertArea'}>输入内容</label>
                    <input id="insertArea"
                           className={'input'}
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}/>
                    <button className={'red-btn'} onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>{this.getTodoItems()}</ul>
            </Fragment>
        );
    }
}

export default TodoList;
