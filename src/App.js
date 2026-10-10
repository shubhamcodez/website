import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Quant from './components/Quant';
import Resume from './components/Resume';
import Casual from './components/Casual';
import Team from './components/Team';
import Research from './components/Research';
import Coding from './components/quant/Coding';
import Resources from './components/quant/Resources';
import Puzzles from './components/quant/Puzzles';
import DarkModeToggle from './components/DarkModeToggle';
import SEO from './components/SEO';
import CompaniesDropdown from './components/CompaniesDropdown';
import PaperDetail from './components/PaperDetail';
import About, { JourneyChart } from './components/About';
import MeteorStrike from './components/MeteorStrike';

function AppContent() {
  const location = useLocation();
  const isQuantPage = location.pathname.startsWith('/quant');

  // SEO configuration based on current route
  const getSEOConfig = () => {
    const baseUrl = "https://shubhamcodez.github.io";
    const path = location.pathname;

    switch (path) {
      case '/':
        return {
          title: "Shubham Singh | Quantitative Finance Researcher & Machine Learning Expert",
          description: "Shubham Singh - NYU graduate and Quantitative Researcher. Shubham Singh from DAV Kharghar and Bharati Vidyapeeth University. Expert in machine learning, algorithmic trading, and quantitative finance. Research leader in quantitative finance, LLM finetuning, quantum semantic embeddings, and market making strategies. Founder of Exituity (Agentic Platform for Small Business M&A).",
          keywords: "Shubham Singh, Shubham Singh NYU, Shubham Singh DAV Kharghar, Shubham Singh Bharati Vidyapeeth, Shubham Singh Kharghar, quantitative researcher, machine learning expert, algorithmic trading, statistical modeling, quantitative finance, LLM finetuning, quantum semantic embedding, market making, arbitrage strategies, optimal control, NYU graduate, Bharati Vidyapeeth graduate, published researcher, Exituity founder, founder advisor",
          image: `${baseUrl}/img_nvidia.png`,
          type: "profile"
        };
      case '/quant':
        return {
          title: "Quantitative Finance Resources | Shubham Singh",
          description: "Comprehensive quantitative finance resources by Shubham Singh including coding challenges, puzzles, and educational materials for aspiring quantitative researchers and traders.",
          keywords: "Shubham Singh, Shubham Singh NYU, quantitative finance resources, quant coding challenges, trading puzzles, quantitative finance education, algorithmic trading resources",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/coding':
        return {
          title: "Quantitative Finance Coding Challenges | Shubham Singh",
          description: "Practice coding challenges and problems by Shubham Singh for quantitative finance interviews and algorithmic trading positions.",
          keywords: "Shubham Singh, Shubham Singh NYU, quant coding challenges, quantitative finance coding, algorithmic trading coding, quant interview preparation, finance programming",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/resources':
        return {
          title: "Quantitative Finance Learning Resources | Shubham Singh",
          description: "Curated list by Shubham Singh NYU of books, papers, courses, and resources for learning quantitative finance, machine learning, and algorithmic trading.",
          keywords: "Shubham Singh, Shubham Singh NYU, quantitative finance books, quant learning resources, finance courses, trading education, quantitative finance papers",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/quant/puzzles':
        return {
          title: "Quantitative Finance Puzzles | Shubham Singh",
          description: "Brain teasers and puzzles by Shubham Singh for quantitative finance interviews and trading positions. Test your problem-solving skills.",
          keywords: "Shubham Singh, Shubham Singh NYU, quant puzzles, finance brain teasers, quantitative interview puzzles, trading puzzles, quant problem solving",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/resume':
        return {
          title: "Resume | Shubham Singh - Quantitative Researcher",
          description: "Professional resume and CV of Shubham Singh NYU - Quantitative Researcher specializing in machine learning, algorithmic trading, and statistical modeling.",
          keywords: "Shubham Singh, Shubham Singh NYU, Shubham Singh resume, quantitative researcher CV, quant researcher resume, machine learning engineer resume",
          image: `${baseUrl}/img_nvidia.png`,
          type: "profile"
        };
      case '/research':
        return {
          title: "Research | Shubham Singh - Quantitative Finance & Machine Learning",
          description: "Research publications, working papers, and preprints by Shubham Singh NYU on quantitative finance, machine learning, LLM alignment, and algorithmic trading.",
          keywords: "Shubham Singh, Shubham Singh NYU, quantitative finance research, machine learning research, LLM alignment, algorithmic trading research, research papers, arXiv preprints",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/blog':
        return {
          title: "Blog | Shubham Singh",
          description: "Blog - Personal blog and articles by Shubham Singh on quantitative finance, machine learning, and technology.",
          keywords: "Shubham Singh, Shubham Singh NYU, blog, quantitative finance blog, machine learning blog, quant research blog",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/team':
        return {
          title: "Team | Shubham Singh NYU",
          description: "Meet the team and collaborators working with Shubham Singh NYU on quantitative research and machine learning projects.",
          keywords: "Shubham Singh, Shubham Singh NYU, research team, collaborators, quantitative research team",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
      case '/about':
        return {
          title: "About | Shubham Singh - AI Engineer & Quantitative Researcher",
          description: "Shubham Singh - Education, experience, and research interests. NYU graduate, founder of Exituity (Agentic Platform for Small Business M&A), previously PostTraining & Human Data at xAI. Machine learning, quantitative finance, and AI systems.",
          keywords: "Shubham Singh, Shubham Singh NYU, about, AI engineer, quantitative researcher, Exituity founder, xAI, SpaceXAI, machine learning, algorithmic trading",
          image: `${baseUrl}/img_nvidia.png`,
          type: "profile"
        };
      default:
        // Check if it's a research paper page
        if (path.startsWith('/research/')) {
          return {
            title: "Research Paper | Shubham Singh NYU",
            description: "Research publication by Shubham Singh NYU on quantitative finance, machine learning, and AI.",
            keywords: "Shubham Singh, Shubham Singh NYU, research paper, quantitative finance, machine learning",
            image: `${baseUrl}/img_nvidia.png`,
            type: "article"
          };
        }
        return {
          title: "Shubham Singh | Shubham Singh NYU | Quantitative Finance Researcher & Machine Learning Expert",
          description: "Shubham Singh NYU - Exceptional Quantitative Researcher with advanced expertise in statistical modeling, machine learning, and algorithmic trading.",
          keywords: "Shubham Singh, Shubham Singh NYU, Shubham Singh DAV Kharghar, Shubham Singh Bharati Vidyapeeth, Shubham Singh Kharghar, quantitative researcher, machine learning expert, algorithmic trading",
          image: `${baseUrl}/img_nvidia.png`,
          type: "website"
        };
    }
  };

  const seoConfig = getSEOConfig();

  return (
    <div className="App">
      <SEO {...seoConfig} />
      <DarkModeToggle />
      <div className="app-content">
        <div className="container">
          {location.pathname !== '/blog' && location.pathname !== '/research' && (
            <header className="text-center my-4">
              <h1>Shubham Singh</h1>
            </header>
          )}

          {!isQuantPage && (
            <nav className="container-fluid">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <CompaniesDropdown />
              </ul>
            </nav>
          )}
        </div>
        
        <Routes>
          <Route path="/" element={
            <div className="home-page-content">
              <div className="intro-section home-intro">
                <article className="intro-content">
                  <p className="home-obsession">
                    I'm obsessed with solving problems through engineering and design solutions.
                  </p>
                  <p className="home-hobbies">
                    Hobbies: running, chess, experimentation (been exploring hardware programming these days), creating new words/terms, and bad jokes.
                  </p>
                  <p className="home-contact">
                    Email: shubham.singh (at) nyu (dot) edu
                  </p>
                </article>
                <MeteorStrike>
                  <div className="profile-image-container">
                    <img src="/1-gg-cropped.jpg" alt="Shubham Singh - AI Engineer and Quantitative Researcher" className="profile-image" />
                  </div>
                </MeteorStrike>
              </div>

              <JourneyChart />

              <Research hideTitle={true} />
            </div>
          } />
          <Route path="/quant" element={<Quant />} />
          <Route path="/quant/coding" element={<Coding />} />
          <Route path="/quant/resources" element={<Resources />} />
          <Route path="/quant/puzzles" element={<Puzzles />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:paperId" element={<PaperDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Casual />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        <div className="university-logos text-center mt-4">
          <img src="/companies/NYU.png" alt="Shubham Singh NYU - New York University" title="Shubham Singh NYU - New York University" className="university-logo" />
          <img src="/companies/bvp.png" alt="Shubham Singh Bharati Vidyapeeth University" title="Shubham Singh Bharati Vidyapeeth University" className="university-logo" />
          <svg
            className="university-logo spacexai-logo"
            width="240"
            height="92"
            viewBox="0 0 759 290.2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Shubham Singh SpaceXAI - PostTraining & Human Data at xAI"
          >
            <title>Shubham Singh SpaceXAI - PostTraining & Human Data at xAI</title>
            <g transform="translate(-674.5,-388.5)">
              <path d="M1433.19 388.934C1345.69 396.068 1001.73 438.71 763.235 678.467H674.732L684.62 668.612C734.53 620.395 955.373 416.045 1433.19 388.668V388.934Z" />
              <path d="M1133.66 678.467H1064.29L927.618 578.979C940.213 571.058 952.888 563.515 965.603 556.33L1133.66 678.467Z" />
              <path d="M1022.8 678.468H953.463L932.43 663.169H814.998C823.265 655.828 831.635 648.702 840.092 641.784H902.996L870.444 618.106C882.079 609.448 893.843 601.155 905.701 593.211L1022.8 678.468Z" />
              <path d="M770.433 495.02L823.901 533.876C810.594 541.712 798.139 549.468 786.514 557.055L701.158 494.986L770.433 495.02Z" />
            </g>
          </svg>
          <span className="university-logo-exituity">
            <img src="/companies/exituity-logo-dark.png" alt="Shubham Singh Exituity - Founder" title="Shubham Singh Exituity - Founder of Exituity" className="university-logo full-width exituity-logo-light" />
            <img src="/companies/exituity_logo.png" alt="Shubham Singh Exituity - Founder" title="Shubham Singh Exituity - Founder of Exituity" className="university-logo full-width exituity-logo-dark" />
          </span>
          <img src="/companies/aiisc.png" alt="Shubham Singh AIISC - Artificial Intelligence Institute of South Carolina" title="Shubham Singh AIISC - AI Researcher" className="university-logo full-width" />
          <img src="/companies/undp logo.svg" alt="Shubham Singh United Nations Development Programme" title="Shubham Singh UNDP - Data Science Intern" className="university-logo" />
        </div>
        
        <footer className="text-center mt-4">
          <p>&copy; 2025 Shubham Singh. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/therealshubham" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/shubhamcodez" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.kaggle.com/shubhamcodez" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-kaggle"></i>
            </a>
            <a href="https://www.youtube.com/ShubhamSinghYoutube" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://x.com/peakshubham" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://scholar.google.com/citations?user=YTCnYh4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fas fa-graduation-cap"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
