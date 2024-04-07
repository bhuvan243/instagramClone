import "./App.scss";
import { createContext, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoadingWrapper } from "./components/LoadingWrapper";
import useNotification from "antd/es/notification/useNotification";
import { Provider } from "react-redux";
import store from "./redux";
import Sidebar from "./components/sidebar";
import CreateNewPost from "./components/sidebar/features/create";

const Signup = lazy(() => import("./routes/signup"));
const Login = lazy(() => import("./routes/login"));
const Home = lazy(() => import("./routes/home"));
// const Posts = lazy(() => import("./routes/posts"));
const ProfilePage = lazy(() => import("./routes/profile"));
const Following = lazy(() => import("./routes/profile/components/Following"));
const Followers = lazy(() => import("./routes/profile/components/Followers"));
const Post = lazy(() => import("./routes/post"));
export const LoginContext = createContext();

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem("token"));
  });

  const contextHolder = useNotification()[1];

  return (
    <Provider store={store}>
      <LoginContext.Provider value={{ setIsUserLoggedIn }}>
        <div className="App">
          {contextHolder}
          <BrowserRouter>
            <Sidebar />
            <Routes>
              {isUserLoggedIn ? (
                <>
                  <Route
                    path="/"
                    element={<LoadingWrapper Component={ProfilePage} />}
                  />
                  <Route path="create" element={<CreateNewPost />} />
                  <Route
                    path="home"
                    element={<LoadingWrapper Component={Home} />}
                  />
                  <Route
                    path="/profile"
                    element={<LoadingWrapper Component={ProfilePage} />}
                  >
                    <Route
                      path="following"
                      element={<LoadingWrapper Component={Following} />}
                    />
                    <Route
                      path="followers"
                      element={<LoadingWrapper Component={Followers} />}
                    />
                    <Route
                    path="p/:postId"
                    element={<LoadingWrapper Component={Post} />}
                    />
                  </Route>
                </>
              ) : (
                <>
                  <Route
                    path="login"
                    element={<LoadingWrapper Component={Login} />}
                  />
                  <Route
                    path="signup"
                    element={<LoadingWrapper Component={Signup} />}
                  />
                </>
              )}
              <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
          </BrowserRouter>
        </div>
      </LoginContext.Provider>
    </Provider>
  );
}

export default App;
