import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Badges from "./components/Badges"
import Projects from "./components/Projects"
import Contributions from "./components/Contributions"
import Skills from "./components/Skills"

export default function Home() {
  return (
		<>
			<Header />
			<AboutMe />
			<Badges />
			<Projects />
			<Contributions />
			<Skills />
		</>
  )
}
