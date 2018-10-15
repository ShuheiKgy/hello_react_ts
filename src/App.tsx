import * as React from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import './App.css';

interface IAppState {
  count: number;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  public increment() {
    this.setState({ count: this.state.count + 1 });
  }

  public decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  public render() {
    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{this.state.count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={this.decrement}>
                -1
              </Button>
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
