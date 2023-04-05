/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { usePostUserMutation } from "./app/api/properties";
import { setUser } from "./app/slices/logUser";
import Comentarios from "./components/Dash/comentarios";
import PubliUsuario from "./components/Dash/PubliUsuario";
import Detail from "./pages/Detail";
import Estadistica from "./pages/Estadistica";
import FilterCombine from "./pages/FilterCombine";
import FilterType from "./pages/FilterType";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import PropertiesForm from "./pages/PropertiesForm/PropertiesForm";
import Step1 from "./pages/PropertiesForm/Step1";
import Step2 from "./pages/PropertiesForm/Step2";
import Step3 from "./pages/PropertiesForm/Step3";
import Step4 from "./pages/PropertiesForm/Step4";
import Step5 from "./pages/PropertiesForm/Step5";
import Step6 from "./pages/PropertiesForm/Step6";
import Step7 from "./pages/PropertiesForm/Step7";
import Step8 from "./pages/PropertiesForm/Step8";
import Step9 from "./pages/PropertiesForm/Step9";

import Review from "./pages/Review.jsx";

import Search from "./pages/Search";
const App = () => {
  const { logUser: globalUser } = useSelector((state) => state.logUser); //se utiliza para obtener el valor logUser del estado global de la aplicación y asignarlo a la constante globalUser
  const { user, isAuthenticated } = useAuth0(); //En este caso, el hook se utiliza para obtener la información del usuario autenticado y su estado de autenticación.
  const [postUser] = usePostUserMutation();
  const dispatch = useDispatch();

  async function addUser(data) {
    const login = await postUser(data).unwrap();
    dispatch(setUser(login));
  }

  useEffect(() => {
    if (isAuthenticated && !globalUser) {
      const userData = {
        name: user.given_name,
        lastName: user.family_name,
        email: user.email,
        id: user.sub,
      };
      addUser(userData);
    }
  }, [user]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/search/:filter" element={<Search />} />
          <Route path="/type/:filter" element={<FilterType />} />

          <Route path="/filterCombine" element={<FilterCombine />} />
          <Route path="/addproperty" element={<PropertiesForm />} />
          <Route path="/addproperty/step1" element={<Step1 />} />
          <Route path="/addproperty/step2" element={<Step2 />} />
          <Route path="/addproperty/step3" element={<Step3 />} />
          <Route path="/addproperty/step4" element={<Step4 />} />
          <Route path="/addproperty/step5" element={<Step5 />} />
          <Route path="/addproperty/step6" element={<Step6 />} />
          <Route path="/addproperty/step7" element={<Step7 />} />
          <Route path="/addproperty/step8" element={<Step8 />} />
          <Route path="/addproperty/step9" element={<Step9 />} />
          <Route path="/dashboard" element={<Profile />} />
          <Route path="/comments" element={<Comentarios />} />
          <Route path="/stats" element={<Estadistica />} />
          <Route path="/mypublic" element={<PubliUsuario />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
