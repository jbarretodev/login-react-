import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistePage from "./pages/RegistePage";
import Navegation from "./components/Navegation";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/register' element={<RegistePage />} />
        <Route element={<ProtectedRoute isAllowed={ true } />}>
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
