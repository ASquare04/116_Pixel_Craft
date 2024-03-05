import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import HomePage from "./pages/home.page";
import Blog from "./pages/blog.page";
import Explore from "./pages/explore.page";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/explore" element={<Explore />} />
{/*         <Route path="signin" element={<UserAuthForm type="sign-in" />} />
        <Route path="signup" element={<UserAuthForm type="sign-up" />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
