import * as React from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import CharacterList, { Character } from './CharacterList';

import './App.css';

const LIMIT = 60;

interface AppState {
  timeLeft: number;
}

class App extends React.Component<{}, AppState> {
  timerId: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }

  reset = () => this.setState({ timeLeft: LIMIT });

  tick = () => {
    this.setState({ timeLeft: this.state.timeLeft - 1 });
  };

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  componentDidUpdate = () => {
    if (this.state.timeLeft === 0) {
      this.reset();
    }
  };

  componentWillUnmount = () => {
    clearInterval(this.timerId);
  };

  render() {
    const characters: Character[] = [
      {
        name: '山田太郎',
        age: 14,
        height: 160,
      },
      {
        name: '高橋あきこ',
        age: 13,
        height: 155,
      },
    ];

    return (
      <div className="container">
        <header className="App-header">
          <h1 className="App-title">タイマー</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{this.state.timeLeft}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <Button color="red" fluid={true} onClick={this.reset}>
              <Icon name="redo" /> Reset
            </Button>
          </Card.Content>
        </Card>
        <CharacterList school="ABC中学校" characters={characters} />
      </div>
    );
  }
}

export default App;
