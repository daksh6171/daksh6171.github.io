import React, { Component } from "react";
import { forgotPassword } from "../../Api/index";
 
class ForgotPassword extends Component {
    state = {
        email: "",
        message: "",
        error: ""
    };
 
    forgotPassword = async (e) => {
        e.preventDefault();
        this.setState({ message: "", error: "" });
        
        await forgotPassword(this.state.email).then( data => {
            try {
                console.log(data.message);
                this.setState({ message: data.message });
            } catch (error) {
                console.log(error);
                this.setState({ error: data.error });
            }
            
        });
    };
 
    render() {
        return (
            <div className="container" style ={{ height: "calc(100vh - 200px)"}}>
                <h2 className="mt-5 mb-5">Ask for Password Reset</h2>
 
                {this.state.message && (
                    <h4 className="bg-success">{this.state.message}</h4>
                )}
                {this.state.error && (
                    <h4 className="bg-warning">{this.state.error}</h4>
                )}
 
                <form>
                    <div className="form-group mt-5">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Your email address"
                            value={this.state.email}
                            name="email"
                            onChange={e =>
                                this.setState({
                                    email: e.target.value,
                                    message: "",
                                    error: ""
                                })
                            }
                            autoFocus
                        />
                    </div>
                    <button
                        onClick={this.forgotPassword}
                        className="btn btn-raised btn-primary"
                    >
                        Send Password Resest Link
                    </button>
                </form>
            </div>
        );
    }
}
 
export default ForgotPassword;