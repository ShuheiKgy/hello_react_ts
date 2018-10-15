import * as React from 'react';
import CharacterList, { ICharacter } from './CharacterList';

import './App.css';

class App extends React.Component {
  public render() {
    const characters: ICharacter[] = [
      {
        age: 16,
        height: 151,
        name: '羽咲 綾乃',
      },
      {
        age: 18,
        height: 174,
        name: '荒垣 なぎさ',
      },
      {
        age: 18,
        name: '泉 理子',
      },
    ];

    return (
      <div className="container">
        <header>
          <h1>はねバド！ キャラクター一覧</h1>
        </header>
        <CharacterList school="北小町高校" characters={characters} />
      </div>
    );
  }
}

export default App;
