import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import { hot } from 'react-hot-loader';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 1,
                text: 'Posprzątać mieszkanie',
            }, {
                id: 2,
                text: 'Zmyć naczynia'
            }, {
                id: 3,
                text: 'Wyjść na spacer z psem'
            }, {
                id:4,
                text:'Ugotować obiad'
            }]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title='Lista zadań' items={this.state.data.length}/>
                <TodoList list={this.state.data} remove={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}
export default hot(module)(App);