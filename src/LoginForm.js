import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            stack: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        let input = event.target.name;
        let value = event.target.value;
        this.setState(() => {
            if (input == "stack") {
                value = parseInt(value);
            }
            return {
                [input]: value
            }
        });
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.username, this.state.stack);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    Stack:
                    <input
                        name="stack"
                        type="number"
                        value={this.state.stack}
                        onChange={this.handleInputChange}
                    />
                </label>
                <input
                    type="submit"
                    value="Login"
                />
            </form>
        );
    }
}

export default LoginForm;