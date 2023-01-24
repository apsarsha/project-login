
import RegirstationForm from "./Componenets/auth/RegirstationForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginForm from './Componenets/auth/LoginForm'


function App() {
  return (
    <div>
       <RegirstationForm />
          <LoginForm />
      <BrowserRouter>
      <Routes>
         
          <Route path="/" exact component={LoginForm} />
          <Route path="/RegirstationForm" exact component={RegirstationForm} />
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
