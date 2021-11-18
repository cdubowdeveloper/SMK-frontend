import React from 'react';

import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

class SignupPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        name:  '',
        username: '',
        password: '', 
      }
    }
  
    handleChange(name, value) {
        this.setState(() => ({ [name]: value }));
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { name, username, password } = this.state
      alert(`Your registration detail: \n 
             Name: ${name} \n 
             Username: ${username} \n
             Password: ${password}`)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Previous
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Next
        </button>        
      )
    }
    return null;
  }
    
    render() {    
      return (

        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
          */}
          <Step1 
            currentStep={this.state.currentStep} 
            //handleChange={this.handleChange}
            name={this.state.name}
          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            password={this.state.password}
          />
          {this.previousButton()}
          {this.nextButton()}
  
        </form>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <div className="form-group">
        <Text htmlFor="name">What is your name?</Text>
        <TextInput  
          className="form-control"
          accessibilityLabel="name"
          placeholder="Enter Name"
          style={styles.name}
          secureTextEntry={false}
          value={props.name}
          onChangeText={(txt) => this.handleChange("name", txt)}
           
      />   
      </div>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <TextInput  
          className="form-control"
          accessibilityLabel="username"
          placeholder="Enter Username"
          style={styles.username}
          secureTextEntry={false}
          value={props.username}
          onChangeText={props.handleChange}
      />    
      </div>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <React.Fragment>
      <div className="form-group">
        <Text>Password</Text>

        <TextInput  
          className="form-control"
          accessibilityLabel="password"
          placeholder="Enter password"
          style={styles.password}
          secureTextEntry={true}
          value={props.password}
          onChangeText={props.handleChange}
      />                                    

      
        {/* <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />       */}
      </div>
      <button className="btn btn-success btn-block">Sign up</button>
      </React.Fragment>
    );
  }





  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    username: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
    },
  
    password: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlign: 'center'
    },

    name: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center'
      },

  
    loginButton: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      textAlign: 'center'
    }
  });

  export default SignupPage;