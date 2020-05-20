import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        this.props.socket.login(this.state.username, this.state.password).then(()=>{

        }).catch(()=>{

        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input name="password" type="text" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}