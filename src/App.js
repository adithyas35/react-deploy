import React, { Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
    
    state={
      persons:[
        {name:'Raja', age:20},
        {name:'Manja', age:28},
        {name:'Rajahuli', age:24}

      ],
        otherState:'some other value'
    };
    //console.log('Has been clicked');
    //this.setState.persons[0].name='Rajahuli';
     switchNameHandler =()=>{
      this.setState({
        persons:[
      {name:'Rajahuli', age: 28},
      {name:'Baahubali', age:30},
      {name:'Adithya',age:28}
        ]
    });
    }
    render(){
    return (
      <div className="App">
       <h1>Welcome to Adithya's react app</h1>
       <button onClick={this.switchNameHandler}> Switch Name</button>
       <Person 
       name={this.persons[0].name}
        age={this.state.persons[0].age} hobby="gaming" click={this.switchNameHandler} />
       <Person name={this.state.persons[1].name} hobby="coding" />
       <Person name={this.state.persons[2].name} 
       hobby="Racing">I also like:Choclate</Person> 
      </div>
    );
  }
}

export default App;


