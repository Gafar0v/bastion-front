import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/page";
import { Provider } from "react-redux";
import { store } from "./store";
import SignUpPage from "./pages/SignUp/page";
import SignInPage from "./pages/SignIn/page";
import Cabinet from "./components/cabinet";
import CabinetPage from "./pages/Cabinet/page";
import ProfilePage from "./pages/Profile/page";
import CandidatsPage from "./pages/Candidats/page";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/candidat" element={<CandidatsPage/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
