import '../webflowFiles/css/normalize.css';
import '../webflowFiles/css/components.css';
import '../webflowFiles/css/joe-webb.css';
import Navigation from '../components/Navigation';
import SideCaptions from '../components/SideCaptions';
import HomeHero from '../components/HomeHero';
import ProjectSection from '../components/ProjectSection';
import AboutMe from '../components/AboutMe';
import BlogArticleList from '../components/BlogArticleList';
import ServiceSection from '../components/ServiceSection';
import MainCTA from '../components/MainCTA';
import Footer from '../components/Footer';
// import { projects } from '../wf-data/projects'

export default function Home() {
    return (
        <div className="project-wrapper">
            <Navigation />
            <SideCaptions />
            <HomeHero />
            <ProjectSection />
            <AboutMe />
            <BlogArticleList />
            <ServiceSection />
            <MainCTA />
            <Footer />
        </div>
    )
}
