import {BrowserRouter, Route} from 'react-router-dom';

import {FormStep1} from './pages/FormStep1'

import {FormStep2} from './pages/FormStep2'

import {FormStep1} from './pages/FormStep3'

export const Router = () =>{
  <BrowserRouter>
  <Route path="/" exact component={FormStep1}/>
  
<Route path="/step2" exact component={FormStep2}/>

<Route path="/step3" exact component={FormStep3}/>
  </BrowserRouter>
  
}