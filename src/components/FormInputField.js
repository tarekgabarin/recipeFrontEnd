import React, {Component, PropTypes} from 'react'
import {FormGroup, Col, ControlLabel, Grid, Row} from 'react-bootstrap'
import {Field} from "redux-form"

export class FormInputField extends Component {

    static propTypes = {

        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        labelProps: PropTypes.object,
        inputColProps: PropTypes.object,
        inputProps: PropTypes.object

    };


    render() {
        let { name, label, placeholder, labelProps, inputColProps, inputProps } = this.props;
        placeholder = placeholder || label;

        return (
            <FormGroup controlId={name}>

                <Grid>
                    <Row>
                        <Col {...(inputColProps || {})}>
                            <Field className="form-control" id={name} name={name} {...(inputProps || {})}
                                   placeholder={placeholder}>
                                {this.props.children}
                            </Field>
                        </Col>
                    </Row>


                </Grid>



            </FormGroup>
        );
    }
}


export default FormInputField