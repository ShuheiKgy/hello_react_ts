import * as React from 'react';
import CharacterList, { Character } from './CharacterList';
import Timer from './containers/Timer';

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
        <header>
          <h1>Newタイマー</h1>
        </header>
        <Timer limit={60} />
        <CharacterList school="ABC中学校" characters={characters} />
      </div>
    );
  }
}

export default App;
