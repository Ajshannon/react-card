import React, { Component } from 'react';
import './App.css';
import {Button, Card, CardTitle, Col, Container } from 'react-materialize'
class App extends Component {
  state = {
    user: {},
    active: false
  }
  
  handleClick = () => {
    fetch('https://api.github.com/users/ajshannon')
      .then(response => response.json())
      .then(data => {
        this.setState({user: data})
        console.log({user: data})
      })
      
      .catch(function(error) {
        console.log(error);
      }); 
  }

  render() {
    return (
      <Container>
        <Button onClick={this.handleClick}>Toggle user</Button>
        {this.state.user.avatar_url && 
        <div class="row">
          <Col m={7} s={12}>
            <Card className='large'
              header={<CardTitle image={`${this.state.user.avatar_url}`}>{this.state.user.name}</CardTitle>}
              actions={[<a href='#'></a>]}>
              <h4>{this.state.user.location}</h4>
              <p className="title">{this.state.user.bio}</p>
          </Card>
          </Col>
        </div> 
        }  
        
      </Container>
      
    );
  }
}

export default App;
