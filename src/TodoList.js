import React from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => {
    const {
        inputValue,
        changeInputValue,
        handleBtnClick,
        handleItemDelete,
        list
    } = props;
    return (
        <div>
            <div>
                <input
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button onClick={handleBtnClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={handleItemDelete.bind(this, index)}>{item}</li>;
                    })
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },
        handleBtnClick() {
            const action = {
                type: 'add_item'
            };
            dispatch(action);
        },
        handleItemDelete(index) {
            const action = {
                type: 'delete_item',
                index
            };
            dispatch(action);
        }
    }
};

// 执行返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);