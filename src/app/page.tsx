import Image from "next/image";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";

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