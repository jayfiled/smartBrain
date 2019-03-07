import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <article className="pa4 black-80">
                <form action="sign-up_submit" method="get" accept-charset="utf-8">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0 center">Register</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" type="text" name="email-address"  id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 measure" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" for="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="mt3">
                        <input
                        onClick={() => onRouteChange('home')}
                         class="b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-black hover-white grow pointer f6" 
                        type="submit" 
                        value="Sign Up" />
                    </div>
                </form>
            </article>
        </article>
    );
};

export default Register;