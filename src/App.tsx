import * as React from 'react';
import Header from './components/header/Header';
// import Footer from './components/footer/Footer';
// import MainBox from './components/main_box/MainBox';
import NoMatch from './components/no_match/NoMatch';
import Blog from './components/blog/Blog';
import Certificates from './components/certificates/Certificates';
// import CuriousToLearnMore from './components/curious_to_learn_more/CuriousToLearnMore';
import Menu from './components/menu/Menu';
import Landing from './components/landing/Landing';
import './compiled_css/App.css';
import './compiled_css/fonts/font-faces.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { diwalaFrontpageApp } from './reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(diwalaFrontpageApp);
const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Menu />
        <Header />
        <Switch>
          {/* <Route exact={true} path="/" component={MainBox}/> */}
          <Route exact={true} path="/certificates" component={Certificates}/>
          <Route exact={true} path="/landing" component={Landing}/>
          <Route exact={true} path="/blog" component={Blog}/>
          <Route component={NoMatch}/>
        </Switch>
        {/* <Footer>
          <Switch>
            <Route exact={true} path="/" component={CuriousToLearnMore}/>
            <Route exact={true} path="/certificates" component={CuriousToLearnMore}/>
          </Switch>
        </Footer> */}
      </div>
    </Router>
  </Provider>
);

export default App;
