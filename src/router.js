import { createRoutesFromElements,createBrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Github from "./pages/Github";
import { aboutLoader, projectsLoader, githubLoader } from "./loaders";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Home/>}/>
        <Route path="/about" element={<About/>} loader={aboutLoader}/>
        <Route path="/projects" element={<Projects/>} loader={projectsLoader}/>
        <Route path="/github" element={<Github/>} loader={githubLoader}/>
    </Route>
))

export default router