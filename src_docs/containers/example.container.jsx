import React from 'react';
import { Panel, Grid, Row, Col, Checkbox } from 'react-bootstrap';
import GithubLogo from '../images/logo-github.svg';
import packageConfig from '../../package.json';
import ExampleComponent from '../components/example.component';

const packageDescription = packageConfig.description;
const packageName = packageConfig.name.replace('@opuscapita/', '');

export default class ComponentView extends React.PureComponent {
  state = {
    autoFocus: true,
    minChars: 0,
    tooltipDelay: 0,
    allowEmptySearch: true,
    isDynamic: false,
    isTooltipEnabled: false,
  }

  changeNumberProp = prop => (e) => {
    const val = Number(e.target.value);
    this.setState({ [prop]: val });
  }

  handleSearch = (searchValue) => {
    this.setState({ searchValue });
  }

  handleFilter = (filterValue) => {
    this.setState({ filterValue });
  }

  renderNumberInput = attr => (
    <p>
      <input
        type="number"
        value={this.state[attr]}
        onChange={this.changeNumberProp(attr)}
        style={{ width: '60px' }}
      />
      {' '}
      {attr}
    </p>
  )

  renderCheckbox = attr => (
    <p>
      <Checkbox
        inline
        checked={this.state[attr]}
        onChange={() => this.setState({ [attr]: !this.state[attr] })}
      >
        {attr}
      </Checkbox>
    </p>
  )

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={10}>
            <h3 style={{ marginTop: '10px' }}>
              {packageDescription}
            </h3>
          </Col>
          <Col xs={2}>
            <a
              href={`https://github.com/OpusCapita/${packageName}`}
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={2}>
            <Panel style={{ padding: '20px' }}>
              {this.renderNumberInput('minChars')}
              {this.renderCheckbox('allowEmptySearch')}
              {this.renderCheckbox('isDynamic')}
              {this.renderCheckbox('isTooltipEnabled')}
              {this.renderNumberInput('tooltipDelay')}
            </Panel>
          </Col>
          <Col xs={8} md={6}>
            <Panel style={{ padding: '20px' }}>
              <ExampleComponent {...this.state} />
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}
