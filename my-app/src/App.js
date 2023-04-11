import './App.css';
import PostContext from './Context/PostContext';
import AppRouter from './routers/AppRouters';

function App() {
  return (
    <PostContext>
      <div>   
        <AppRouter />
      </div>  
     </PostContext>
  );
}

export default App;
