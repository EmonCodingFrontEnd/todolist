import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import Test from './Test';
import './style.css'

// 定义一个React组件
class TodoList extends Component {


    constructor(props) {
        super(props);
        // 当组件的state或者props发生变化时，render函数就会执行
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
        }), () => {
            console.log(this.ul.querySelectorAll('div').length);
        });
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

    // 在组件即将被挂载到页面的时刻自动执行
    componentWillMount() {
        console.log('componentWillMount');
    }

    render() {
        console.log('parent render');
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
                           onChange={this.handleInputChange}
                    />
                    <button className={'red-btn'} onClick={this.handleBtnClick}>add</button>
                </div>
                <ul ref={(ul) => {
                    this.ul = ul
                }}>{this.getTodoItems()}</ul>
                <Test content={this.state.inputValue}/>
            </Fragment>
        );
    }

    // 组件被挂载到页面之后自动执行
    componentDidMount() {
        console.log('componentDidMount');
    }

    // 在组件被更新之前，会自动被执行
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        // true:需要执行;false:不需要执行
        return true;
    }

    // 组件被更新之前，它会自动执行；但会在shouldComponentUpdate返回true情况下
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    // 在组件被更新之后，会被执行
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }


}

export default TodoList;
