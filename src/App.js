import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SendMail from './components/SendMail/SendMail.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import routes from './routes';

function App() {

  const router=useRoutes(routes)
  const {sendMessageIsOpen}=useSelector(state=>state.mail)
  
  return (
    <>
    <Header />
    <div className="app__body">
      <Sidebar />
      {router}
    </div>
    {sendMessageIsOpen && <SendMail/>}
    </>
  );
}

export default App;
