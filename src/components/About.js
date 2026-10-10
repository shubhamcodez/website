import React from 'react';
import { Navigate } from 'react-router-dom';

const stations = [
  {
    id: 'origins',
    phase: 'Origins',
    place: 'DAV Kharghar',
    role: 'High school · Navi Mumbai',
  },
  {
    id: 'undergrad',
    phase: 'Origins',
    place: 'Bharati Vidyapeeth University',
    role: 'B.S. Computer Science',
    detail: 'DSC BVUCEOP · Entrepreneurship Development Cell',
  },
  {
    id: 'early-labs',
    phase: 'Early labs',
    place: 'Internships & collaborations',
    role: 'ML · imaging · geospatial · trading',
    detail:
      'UNDP · Symbiosis Institute of Medical Imaging · QuantFarming · Dexterity Global Group · Algorithmic Biologics',
  },
  {
    id: 'nyu',
    phase: 'NYU',
    place: 'New York University',
    role: 'M.S. Computer Engineering',
    detail: 'AI Product Management Mentor',
  },
  {
    id: 'research',
    phase: 'Research',
    place: 'AI Institute of South Carolina',
    role: 'AI Researcher',
    detail: 'Alignment Quality Index · LLM finetuning & alignment',
  },
  {
    id: 'quant',
    phase: 'Quant',
    place: 'GoQuant → Blockhouse',
    role: 'Quant Researcher',
    detail: 'Alpha research · systematic trading strategies',
  },
  {
    id: 'xai',
    phase: 'xAI',
    place: 'xAI',
    role: 'PostTraining & Human Data',
  },
  {
    id: 'exituity',
    phase: 'Now',
    place: 'Exituity',
    role: 'Founder',
    detail: 'Agentic Platform for Small Business M&A',
    link: 'https://exituity.com',
    current: true,
  },
];

const interests = [
  'Multiplanetary Expansion',
  'Space',
  'Biolongetivity',
  'Posthumanism',
  'AI',
  'Economic Systems and Financial Markets',
];

const stationsWithPhase = stations.map((stop, index) => ({
  ...stop,
  index,
  showPhase: index === 0 || stop.phase !== stations[index - 1].phase,
}));

export const JourneyChart = () => {
  return (
    <section id="about" className="journey-section" aria-label="About journey">
      <header className="journey-section-header">
        <h2 className="journey-section-title">About</h2>
        <p className="journey-section-kicker">Journey</p>
      </header>

      <ol className="journey-stack" aria-label="Career journey">
        {stationsWithPhase.map((stop) => (
          <li
            key={stop.id}
            id={stop.id}
            className={`journey-item${stop.current ? ' is-current' : ''}${stop.showPhase ? ' is-phase-start' : ''}`}
            style={{ '--i': stop.index }}
          >
            {stop.showPhase && (
              <div className="journey-phase">{stop.phase}</div>
            )}
            <div className="journey-item-row">
              <div className="journey-spine" aria-hidden="true">
                <span className="journey-dot" />
              </div>
              <div className="journey-body">
                <div className="journey-body-top">
                  <h3 className="journey-place">
                    {stop.link ? (
                      <a href={stop.link} target="_blank" rel="noopener noreferrer">
                        {stop.place}
                      </a>
                    ) : (
                      stop.place
                    )}
                  </h3>
                  {stop.current && <span className="journey-now">Now</span>}
                </div>
                <p className="journey-role">{stop.role}</p>
                {stop.detail && <p className="journey-detail">{stop.detail}</p>}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section id="orbit" className="journey-branch">
        <h3 className="journey-branch-title">Orbit</h3>
        <p className="journey-branch-sub">Interests</p>
        <ul className="journey-track" aria-label="Interests">
          {interests.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

const About = () => <Navigate to="/#about" replace />;

export default About;
