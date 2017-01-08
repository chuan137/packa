import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Panel from 'react-bootstrap/lib/Panel';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row style={{marginTop: "30px"}}>
            <Col xs={12} md={4} mdOffset={4}>
              <h4><b>Login</b></h4>
              <Panel>
                <LoginForm />
              </Panel>
            </Col>          
          </Row>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;