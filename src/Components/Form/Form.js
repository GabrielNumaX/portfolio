import React, {Component}from 'react';

import Popup from './Popup';

import css from './Form.module.css';



class Form extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            feedback: '', 
            name: '', 
            email: '' ,
            showPopup: false,
            popupText: ''
            };
    }

    togglePopup = () => {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }

    handleChange = (event, name) => {

        switch(name) {
            case "name":
                this.setState({name: event.target.value})
                break;
            case "email":
                this.setState({email: event.target.value})
                break;
            case "feedback":
                this.setState({feedback: event.target.value})
                break;
            default:
                return null;
        }    
      }
    
      handleSubmit = () => {

        const templateId = 'template_EbBWt3FZ';

        if(this.state.feedback === ''){

            this.setState({
                popupText: 'Please Enter a Message'
            });

            this.togglePopup();
        }
        else if(this.state.email === ''){

            this.setState({
                popupText: 'Please Enter your Email'
            });

            this.togglePopup();
        }
        else {

            this.sendFeedback(templateId, 
                {
                    message_html: this.state.feedback, 
                    from_name: this.state.name, 
                    reply_to: this.state.email
                });

        }

        
        
      }
    
      sendFeedback (templateId, variables) {
        window.emailjs.send(
          'gmail', templateId,
          variables
          ).then(res => {  

            this.setState({
                feedback: '', 
                name: '', 
                email: '',
                popupText: 'Email sent successfully!!!'
            });

            this.togglePopup()
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => {

                this.setState({
                    popupText: 'Something Went Wrong. Try Again'
                });

                this.togglePopup();

                }
            )
      }

    render() {
        return(
            <div className={css.FormDiv}>
                <form className={css.Form}>

                    <div className={css.DivNameEmail}>
                        <div className={css.DivName}>
                            <h5>Your Name</h5>
                            <input  type="text" 
                                    name="name"
                                    onChange={(e) => this.handleChange(e, 'name')}>

                            </input>
                        </div>
                    
                        <div className={css.DivEmail}>
                            <h5>Your E-mail</h5>
                            <input  type="email" 
                                    name="email"
                                    onChange={(e) => this.handleChange(e, 'email')}>
                                    
                            </input>
                        </div>
                    </div>

                    <div className={css.DivTextarea}>
                        <h5>Your Message</h5>
                        <textarea   name="mailing" 
                                    value={this.state.feedback} 
                                    onChange={(e) => this.handleChange(e, 'feedback')}>                   
                        </textarea>
                    </div>

                    <div className={css.DivBtn}>
                        <input type="button" 
                                value="Send Message" 
                                onClick={this.handleSubmit}>    
                        </input>
                    </div>
                    
                    {this.state.showPopup ? 
                        <Popup
                            text={this.state.popupText}
                            closePopup={this.togglePopup}
                        />
                        : null
                    }
                </form>
                
            </div>
        );//end return
    }//end render
}//end class

export default Form;