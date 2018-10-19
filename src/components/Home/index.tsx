import * as React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, List } from 'semantic-ui-react';

import { characterData } from '../../characterData';
import './index.css';

const codes = Object.keys(characterData);

const Home: React.SFC<{}> = () => (
  <>
    <Helmet>
      <title> 作品紹介！はねバド！ </title>
    </Helmet>
    <header>
      <h1>『はねバド！』作品紹介</h1>
    </header>
    <Container className="summary">
      <p>略</p>
    </Container>
    <h2>登場人物</h2>
    <List as="ul">
      {codes.map(code => (
        <List.Item as="li" key={code}>
          <Link to={`/characters/${code}`}>{characterData[code].school}</Link>
        </List.Item>
      ))}
    </List>
  </>
);

export default Home;
