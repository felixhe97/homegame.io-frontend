import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        };
        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.props.onSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" value={this.state.username} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Login"/>
            </form>
        );
    }
}

export default LoginForm;