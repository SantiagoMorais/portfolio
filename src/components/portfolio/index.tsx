import { AboutMe } from "./aboutMe"
import { Hero } from "./hero"

export const Home = () => {
    return (
        <div className="flex-1 flex flex-col items-center">
        <Hero />
        <AboutMe />
        </div>
    )
}