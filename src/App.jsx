import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import User from './pages/User';
import MatchedProfiles from './pages/MatchedProfiles';
import Questions from './pages/Questions';
import IsAnon from './components/auth/IsAnon';
import IsPrivate from './components/auth/IsPrivate';
import Error from './pages/Error';
import MyProfile from './pages/MyProfile';
import SingleMatchedProfile from './pages/SingleMatchedProfile';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/signup'
          element={
            <IsAnon>
              <Signup />
            </IsAnon>
          }
        />
        <Route
          path='/login'
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />

        <Route
          path='/questions'
          element={
            <IsPrivate>
              <Questions />
            </IsPrivate>
          }
        />
        <Route
          path='/user'
          element={
            <IsPrivate>
              <User />
            </IsPrivate>
          }
        />
        <Route
          path='/matchedprofiles'
          element={
            <IsPrivate>
              <MatchedProfiles />
            </IsPrivate>
          }
        />

        <Route
          path='/myprofile'
          element={
            <IsPrivate>
              <MyProfile />
            </IsPrivate>
          }
        />

        <Route
          path='/matchedprofiles/:profileId'
          element={
            <IsPrivate>
              <SingleMatchedProfile />
            </IsPrivate>
          }
        />

        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
