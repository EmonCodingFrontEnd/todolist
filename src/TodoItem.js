import React, {Component} from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // 子组件如何想和父组件通信，子组件要调用父组件传递过来的方法

    handleDelete() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

    render() {
        const {content} = this.props;
        return (
            <div onClick={this.handleDelete} dangerouslySetInnerHTML={{__html: content}}/>
        )
    }
}

export default TodoItem;