import { Switch,Route } from 'react-router-dom';
import Home from './component/Home'
import TopRated from './component/TopRated';
import UpComing from './component/UpComing';
import SingleMovieDetails from './component/SingleMovieDetails';


const App = () => (
 
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/top-rated" component={TopRated}/>
        <Route exact path="/upcoming" component={UpComing}/>
        <Route exact path="/movies/:id" component={SingleMovieDetails}/>
  </Switch>
)



export default App;