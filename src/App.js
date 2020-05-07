import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ProjectsPage from './pages/projects/projects';
import ContactPage from './pages/contact/contact';
import Header from './components/header/header';

import { GlobalStyle } from './global';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/about' />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
