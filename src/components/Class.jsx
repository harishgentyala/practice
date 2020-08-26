import React from 'react';
import Student from './Student';

export default class Class extends React.Component {

    state = { classes: [{ name: 'class1', student: [] }], value: '', selectedClass: '' };

    addClass = () => this.setState({classes: [...this.state.classes, {name: this.state.value,  student: []}]});
 
    setSwetha = className => this.setState({selectedClass: className});

    setClass = value => {
        if(value.length <= 10) this.setState({value: value});
    }
    render() {
        console.log('state value',this.state);
        return (<div>
            <input value={this.state.value} onChange={(e) => this.setClass(e.target.value)}/><button onClick={this.addClass}>Add Class</button>
            <ul>
                {
                    this.state.classes.map(item => <li><button onClick={() => this.setSwetha(item.name)}>{item.name}</button></li>)
                }
            </ul>
            <Student className={this.state.selectedClass}/>
        </div>)
    }
}