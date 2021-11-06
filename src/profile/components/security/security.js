import React from 'react';

class Security extends React.Component {
    constructor(){
        super();
        this.state ={
            email:"joshua@meurt.ez",
            password:"1715ohmeurt",
            password2: '' 
        }
        this.setEmail = this.setEmail.bind(this);
        this.setPassword=this.setPassword.bind(this);
    }
    setEmail(event){
        this.setState({email : event.target.value});
    }
    setPassword(event){
        this.setState({password : event.target.value});
    }
    setPassword2(event){
        this.setState({password2 : event.target.value});
    }

    
    render(){
    return (
        <div>
        
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="intputEmail">Email</label>
                        <input type="text" className="form-control" id="intputEmail" onChange={this.setEmail} value={this.state.email} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword" onChange={this.setPassword} maxLength="20"
                            value={this.state.password} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputPassword2" onChange={this.setPassword2} maxLength="20"
                            value={this.state.password2} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Update</button>
            </form>
        </div>
    );
}
}

export default Security;