import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";
import HomePage from "./pages/home.page";
import Blog from "./pages/blog.page";
import Explore from "./pages/explore.page";
import ExploreDetails from './pages/explore.details.page';
import BlogDetails from "./pages/blog.details.page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id/:featuredImg/:title/:content/:relatedImg1/:relatedImg2" element={<BlogDetails />}/>
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id/:heading/" element={<ExploreDetails />} />
        <Route path="/signin" element={<UserAuthForm type="sign-in" />} />
        <Route path="/signup" element={<UserAuthForm type="sign-up" />} />
      </Route>
    </Routes>
  );
};

export default App;
