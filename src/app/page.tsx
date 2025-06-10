import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <Profile/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}