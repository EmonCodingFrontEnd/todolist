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

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        }
        return false;
    }

    render() {
        const {content} = this.props;
        // JSX -> createElement -> 虚拟DOM（JS对象） -> 真实的DOM对象
        // return React.createElement('div', {}, 'item');
        return (
            <div onClick={this.handleDelete} dangerouslySetInnerHTML={{__html: content}}/>
        )
    }
}

TodoItem.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
};

export default TodoItem;