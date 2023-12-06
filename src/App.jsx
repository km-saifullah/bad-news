import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Category from "./pages/category/Category";
import About from "./pages/about/About";
import SignIn from "./pages/signin/SignIn";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/contact/Contact";
import NotFound from "./sections/notfound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/category" element={<Category />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
