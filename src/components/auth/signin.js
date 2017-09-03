import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import { Button, Modal, ModalBody, ModalHeader, ModalTitle, ModalFooter, Grid, Row } from 'react-bootstrap';
import * as actions from '../../actions';
import {connect} from "react-redux";
import FormInputField from '../../components/FormInputField';

///import {FieldFormControl} from'../../components/FieldFormComponent';


class _Signin extends Component {


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


        this.props.dispatch(actions.logInUser({email, password}));

        console.log({email, password});

        // this.props.logInUser({email, password})

        /// actions.logInUser({email, password});


    }

    render() {

        // const {handleSubmit, fields: {email, password}} = this.props;

        const { handleSubmit, pristine, reset, submitting } = this.props;


        return (

            <div>

                <Button onClick={this.open}>
                    Sign In
                </Button>

                <Modal show={this.state.showModal} dialogClassName="login-modal" onHide={this.close}>

                    <ModalHeader closeButton>

                        <ModalTitle>

                            Sign In
                        </ModalTitle>

                    </ModalHeader>

                    <ModalBody>

                        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>



                            <FormInputField name="email" label="email" inputProps={{type: 'email', component: 'input'}}
                                              labelProps={{xs: 0}} inputColProps={{xs: 4}}/>

                            <FormInputField name="password" label="password" inputProps={{type: 'password', component: 'input'}}
                                            labelProps={{xs: 0}} inputColProps={{xs: 4}}/>


                            <Grid>
                                <Row>

                                    <button action='submit' onClick={this.close} className="btn btn-primary" >Log In</button>

                                </Row>

                            </Grid>




                        </form>




                    </ModalBody>

                    <ModalFooter>



                    </ModalFooter>


                </Modal>


            </div>






        );


    }


}

/*

Signin = reduxForm({
    form: 'logInUser'
})(Signin);

export default connect(null, actions)(Signin);

 */

/*

export default reduxForm({

    form: 'Signin',
    fields: ['email', 'password']
})(Signin);

    */

export const Signin = reduxForm({form: 'login_info', enableReinitialize: true})(_Signin);