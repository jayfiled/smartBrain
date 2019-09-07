import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          name: ''
        }
      }
    
      onEmailChange = (event) => {
        this.setState({email: event.target.value})
      }
    
      onPasswordChange = (event) => {
        this.setState({password: event.target.value})
      }

      onNameChange = (event) => {
        this.setState({name: event.target.value})
      }
    
      onSubmitSignIn = (event) => {
          event.preventDefault();
        fetch('http://localhost:3001/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
          })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
      }

    render() {
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <article className="pa4 black-80">
                    <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 center">Register</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="name">Name</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" 
                                type="text" 
                                name="email-address"  
                                id="name" 
                                onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" 
                                type="email" 
                                name="email-address"  
                                id="email-address" 
                                onChange={this.onEmailChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" 
                                type="password" 
                                name="password"  
                                id="password" 
                                onChange={this.onPasswordChange}
                                />
                            </div>
                        </fieldset>
                        <div className="mt3">
                            <input
                            onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-black hover-white grow pointer f6" 
                            type="submit" 
                            value="Sign Up" />
                        </div>
                    </form>
                </article>
            </article>
        );
    }
};

export default Register;