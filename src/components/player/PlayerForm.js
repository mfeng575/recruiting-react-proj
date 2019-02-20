import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FieldInput from '../common/FieldInput';

const required = value => (value ? undefined : 'Required')
const minValue = min => value =>
  value && value < min ? `Value must be at least ${min}` : undefined
const maxValue = max => value =>
  value && value > max ? `Value must be at most ${max}` : undefined  
const minValue1 = minValue(1)
const maxValue100 = maxValue(100)

export const PlayerForm = ({ handleSubmit, pristine, reset, submitting, heading, handleSave, handleCancel }) => {
    return (
        <form onSubmit={handleSubmit(handleSave)}>
            <h1>{heading}</h1>

            <Field
                type="text"
                name="firstName"
                label="First Name"
                placeholder=""
                validate={[required]}
                component={FieldInput}
            />

            <Field
                type="text"
                name="lastName"
                label="Last Name"
                placeholder=""
                validate={[required]}
                component={FieldInput}
            />

            <Field
                type="number"
                name="score"
                label="Score"
                placeholder=""
                validate={[required, minValue1, maxValue100]}
                parse={value => isNaN(parseInt(value, 10)) ? null : parseInt(value, 10)}
                component={FieldInput}
            />

            <div>
                <button type="submit" disabled={submitting} className="btn btn-primary"><i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit</button>

                {heading === 'Add' && <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default btn-space">Clear Values</button>}

                <button type="button" className="btn btn-default btn-space" onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    );
};

PlayerForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    heading: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'PlayerForm'
})(PlayerForm);
