import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowUpRight, FiBriefcase, FiCode, FiCpu, FiLayers } from 'react-icons/fi';
import { experience, projects } from '../../data/portfolio.js';
import MotionSection from '../ui/MotionSection.jsx';
import SectionHeader from '../ui/SectionHeader.jsx';

const tracks = [
  {
    id: 'frontend',
    label: 'Product interfaces',
    eyebrow: 'Frontend craft',
    icon: FiCode,
    summary: 'Responsive React experiences, reusable interface components, and customer journeys built for real product workflows.',
    skills: ['React.js', 'JavaScript', 'Responsive UI', 'Redux', 'Next.js'],
    projectSlugs: ['ritzy-ecommerce-platform', 'adventure-travel-website', 'restaurant-management-system'],
    experienceRoles: ['Software Developer / React Developer', 'MERN Full Stack Developer Intern'],
  },
  {
    id: 'fullstack',
    label: 'Full-stack workflows',
    eyebrow: 'APIs and data',
    icon: FiLayers,
    summary: 'Frontend and backend work connected through APIs, authentication, business logic, and relational or document databases.',
    skills: ['Node.js', 'Express.js', 'Java', 'REST APIs', 'MySQL', 'MongoDB'],
    projectSlugs: ['smart-food-waste-reduction-system', 'restaurant-management-system'],
    experienceRoles: ['Java Full Stack Developer', 'MERN Full Stack Developer Intern'],
  },
  {
    id: 'iot',
    label: 'IoT and computer vision',
    eyebrow: 'Connected systems',
    icon: FiCpu,
    summary: 'A hands-on robotics project combining Raspberry Pi control, live camera input, face recognition, sensors, and alerts.',
    skills: ['Python', 'Raspberry Pi', 'OpenCV', 'Haar Cascade', 'LBPH', 'Sensor integration'],
    projectSlugs: ['iot-face-recognition-surveillance-robot'],
    experienceRoles: [],
    context: 'Academic team project',
  },
];

export default function RecruiterProofSection() {
  const [activeId, setActiveId] = useState(tracks[0].id);
  const activeTrack = tracks.find((track) => track.id === activeId);
  const Icon = activeTrack.icon;
  const selectedProjects = activeTrack.projectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);
  const selectedExperience = activeTrack.experienceRoles
    .map((role) => experience.find((entry) => entry.role === role))
    .filter(Boolean);

  const selectNextTrack = (event, currentIndex) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? tracks.length - 1
        : (currentIndex + (event.key === 'ArrowRight' ? 1 : tracks.length - 1)) % tracks.length;
    setActiveId(tracks[nextIndex].id);
    document.getElementById(`proof-tab-${tracks[nextIndex].id}`)?.focus();
  };

  return (
    <MotionSection id="proof" className="proof-section">
      <SectionHeader eyebrow="Recruiter Quick View" title="Pick a strength. See the work behind it.">
        A quick map from core skills to project case studies and hands-on experience.
      </SectionHeader>

      <div className="proof-explorer">
        <div className="proof-tabs" role="tablist" aria-label="Explore skills and supporting work">
          {tracks.map((track, index) => {
            const TrackIcon = track.icon;
            const selected = track.id === activeId;
            return (
              <button
                key={track.id}
                id={`proof-tab-${track.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="proof-panel"
                tabIndex={selected ? 0 : -1}
                className="proof-tab"
                onClick={() => setActiveId(track.id)}
                onKeyDown={(event) => selectNextTrack(event, index)}
              >
                <span className="proof-tab-number">0{index + 1}</span>
                <TrackIcon aria-hidden="true" />
                <span>{track.label}</span>
              </button>
            );
          })}
        </div>

        <div
          id="proof-panel"
          className="proof-panel"
          role="tabpanel"
          aria-labelledby={`proof-tab-${activeTrack.id}`}
          key={activeTrack.id}
        >
          <div className="proof-overview">
            <div className="proof-icon"><Icon aria-hidden="true" /></div>
            <p className="proof-eyebrow">{activeTrack.eyebrow}</p>
            <h3>{activeTrack.label}</h3>
            <p className="proof-summary">{activeTrack.summary}</p>
            <div className="proof-skills" aria-label="Relevant skills">
              {activeTrack.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>

          <div className="proof-evidence">
            <div className="proof-evidence-heading">
              <span>Work evidence</span>
              <span className="proof-evidence-rule" />
            </div>
            <div className="proof-project-list">
              {selectedProjects.map((project) => (
                <Link className="proof-project" key={project.slug} to={`/case-study/${project.slug}`}>
                  <span>
                    <small>{project.category} · {project.year}</small>
                    <strong>{project.title}</strong>
                  </span>
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </div>
            <div className="proof-experience">
              <FiBriefcase aria-hidden="true" />
              <div>
                <small>{selectedExperience.length ? 'Relevant experience' : 'Project context'}</small>
                {selectedExperience.length ? selectedExperience.map((entry) => (
                  <p key={entry.role}><strong>{entry.role}</strong><span>{entry.company}</span></p>
                )) : <p><strong>{activeTrack.context}</strong><span>Demonstrated in the case study</span></p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
