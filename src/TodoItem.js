import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // 子组件如何向父组件通信，子组件要调用父组件传递过来的方法

    handleDelete() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

    /**
     * 1.一个组件要从父组件接收参数
     * 2.只要父组件的render函数被重新执行，子组件的这个生命周期函数就会被执行
     * 3.如果这组件第一次存在于父组件中，不会执行
     * 4.如果这个组件之前已经存在于父组件中，才会执行
     */
    componentWillReceiveProps() {
        console.log('child componentWillReceiveProps');
    }

    // 当组件即将被从页面中剔除时执行
    componentWillUnmount() {
        console.log('child componentWillUnmount');
    }

    render() {
        console.log('child render');
        const {content, test} = this.props;
        // JSX -> createElement -> 虚拟DOM（JS对象） -> 真实的DOM对象
        // return React.createElement('div', {}, 'item');
        return (
            <div onClick={this.handleDelete} dangerouslySetInnerHTML={{__html: test + '-' + content}}/>
        )
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

TodoItem.defaultProps = {
    test: 'hello world'
};

export default TodoItem;