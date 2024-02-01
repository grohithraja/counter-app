import {Component} from 'react'
import './App.css';

class App extends Component{
  state = {count: 0}

  onIncrement = () => {
    this.setState((prevState) => {
      return (
        {count: prevState.count + 1}
      )
    })
  }

  onDecrement = () => {
    this.setState((prevState) => {
      return (
        {count: prevState.count - 1}
      )
    })
  }

  onReset = () => {
    this.setState({count: 0})
  }

  render(){
    const {count} = this.state
    return (
      <div className='mainbg'>
       <h1 className='mainh1'>
        Counter App
       </h1>
       <div className='subbg'>
        <p className='count'>
          Count : <span className='counter'>{count}</span>
        </p>
        <div className='btns'>
          <button className="btn1" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="btn1" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
        <button className='btn1 btn11' onClick={this.onReset}>Reset</button>
       </div>
       <p className='g7'>Grohith</p>
      </div>
    )
  }
}


export default App;
