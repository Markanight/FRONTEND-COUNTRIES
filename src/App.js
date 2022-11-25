import './App.css';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx';
import Detail from './components/Detail/Detail';
import CreateActivity from './components/CreateActivity/CreateActivity';


function App() {
  return (
    <Switch>
      <Route exact path={'/'} component={LandingPage}/>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/home/:id'} component={Detail}/>
      <Route exact path={'/activities'} component={CreateActivity}/>
    </Switch>
  );
}

export default App;
