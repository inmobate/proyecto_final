import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { usePostUserMutation } from "./app/api/properties";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Filter from "./pages/Filter";
import FilterCombine from "./pages/FilterCombine";
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
import { setUser } from "./app/slices/logUser";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const { logUser: globalUser } = useSelector((state) => state.logUser);
  const { user, isAuthenticated } = useAuth0();
  const [postUser, { isLoading }] = usePostUserMutation();
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
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/search/:filter" element={<Search/>}/>
      <Route path="/filter/:filter" element={<Filter/>}/>
      <Route path="/filterCombine" element={<FilterCombine/>}/>
      <Route path="/addproperty" element={<PropertiesForm/>}/>
      <Route path="/addproperty/step1" element={<Step1/>}/>
      <Route  path="/addproperty/step2" element={<Step2/>}/>
      <Route path="/addproperty/step3" element={<Step3/>}/>
      <Route path="/addproperty/step4" element={<Step4/>}/>
      <Route path="/addproperty/step5" element={<Step5/>}/>
      <Route path="/addproperty/step6" element={<Step6/>}/>
      <Route path="/addproperty/step7" element={<Step7/>}/>
      <Route path="/addproperty/step8" element={<Step8/>}/>
      <Route path="/addproperty/step9" element={<Step9/>}/>
      <Route path="/dashboard" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
