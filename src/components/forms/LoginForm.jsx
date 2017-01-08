import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Button from 'react-bootstrap/lib/Button';
import FloatRight from '../ui/FloatRight';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form>
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
            />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
            />
          <FloatRight>
            <Button bsStyle="success">Login</Button>
          </FloatRight>
        </form>
      </div>
    );
  }
}

export default LoginForm;