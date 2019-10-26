import React , { Component } from 'react'
import TechItem from '../components/TechItem'
class TechList extends Component {

  static defaultProps ={};
  static protTypes = {};

  state =  {
    newTech: '',
    techs: [
      'Node.js',
      'React.js',
      'React Native'
    ]
  };

  handleInputChande = e => {
    console.log(e.target.value)
    this.setState( { newTech: e.target.value})
  }

  handleSubmit = e => {
      e.preventDefault()
      console.log(this.state.newTech)
      this.setState( {techs : [...this.state.techs , this.state.newTech ],
        newTech: ''
      } )
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter( t => t !== tech ) })
  }

  render(){
    console.log(this.state);
    return (
      <>

      <h1>{this.state.newTech}</h1>
      <form onSubmit={this.handleSubmit}>
      <ul>
        { this.state.techs.map( tech => (
          <TechItem  key={tech} tech={tech} onDelete={() => this.handleDelete(tech)}/>
          // <li key={tech}>
          // {tech}
          // <button onClick={ () => this.handleDelete(tech)} type="button">Remover</button>
          // </li>
          )) }
          <TechItem tech="Test ok" ></TechItem>
      </ul>
      <input 
      type="text"
      onChange={this.handleInputChande} 
      value={this.state.newTech}/>
      <button type="submit">Enviar</button>
      </form>

      </>
    );
  }
}

export default TechList;