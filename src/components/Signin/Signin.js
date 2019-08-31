import React from 'react';

class Signin extends React.Component {
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }
    render() {
        const { onRouteChange } = this.props.onRouteChange;
        return (
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <article className="pa4 black-80">
                    <form action="sign-up_submit" method="get" acceptCharset="utf-8">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0 center">Sign in</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" type="email" name="email-address"  id="email-address" />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="password" name="password"  id="password" />
                            </div>
                        </fieldset>
                        <div className="mt3">
                            <input
                            onClick={() => onRouteChange('home')}
                             className="b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-black hover-white grow pointer f6" 
                            type="submit" 
                            value="Sign In" />
                        </div>
                        <div className="lh-copy mt3">
                            <p 
                            onClick={() => onRouteChange('register')}
                            className="f6 link dim black db pointer">Register</p>
                        </div>
                    </form>
                </article>
            </article>
        );

    }
};

export default Signin;