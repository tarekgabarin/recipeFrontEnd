import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import { Button, Modal, ModalBody, ModalHeader, ModalTitle, ModalFooter } from 'react-bootstrap';


class Signin extends Component {


    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };

        this.close = this.close.bind(this);

        this.open = this.open.bind(this);

        
    }

    close(){

        this.setState({showModal: false});
    }

    open(){

        this.setState({showModal: true});
    }

    handleFormSubmit({email, password}){

        console.log(email, password)

    }

    render() {

        const {handleSubmit, fields: {email, password}} = this.props;


        return (

            <div>

                <Button onClick={this.open}>
                    Sign In
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <ModalHeader closeButton>

                        <ModalTitle>

                            Sign In
                        </ModalTitle>

                    </ModalHeader>

                    <ModalBody>

                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

                            <fieldset className="form-group">

                                <label>Email</label>

                                <input {...email} type="text" className="form-control"/>

                            </fieldset>

                            <fieldset className="form-group">

                                <label>Password</label>

                                <input {...password} type="text" className="form-control"/>

                            </fieldset>

                            <button action='submit' onClick={this.close} className="btn btn-primary">Sign In</button>


                        </form>




                    </ModalBody>

                    <ModalFooter>



                    </ModalFooter>


                </Modal>


            </div>






        );


    }


}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin);