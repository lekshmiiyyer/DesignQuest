import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import ProblemStatement1 from "./assets/ps1";
import ProblemStatement2 from "./assets/ps2";
import ProblemStatement3 from "./assets/ps3";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [lightboxImage, setLightboxImage] = useState('');

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Add new trail position
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x: e.clientX, y: e.clientY }];
        if (newTrail.length > 15) {
          newTrail.shift(); // Keep the trail length limited
        }
        return newTrail;
      });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  const [showProblems, setShowProblems] = useState(false);

  useEffect(() => {
    const revealDate = new Date("March 14, 2025 08:25:00").getTime();

    const checkTime = setInterval(() => {
      const now = new Date().getTime();
      if (now >= revealDate) {
        setShowProblems(true);
        clearInterval(checkTime); // Stop checking once revealed
      }
    }, 1000); // Check every second

    return () => clearInterval(checkTime); // Cleanup interval
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the FAQ if it's already open
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  // Simulate loading for 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, []);

  const posterWorks = [
    { src: '/poff.jpg', alt: 'DesignQuest Official Poster' },
    { src: '/deadline.jpg', alt: 'DesignQuest Additional Image' },
    { src: '/flexx.png', alt: 'DesignQuest Flexx Poster' },
    { src: '/see.png', alt: 'DesignQuest SEE Poster' },
  ];

  // Project Works (New)
  const projectWorks = [
    {
      thumbnail: '/1.png',
      videoLink: 'https://www.youtube.com/watch?v=project1',
      title: 'Project 1: Micro-Jobs Marketplace',
    },
    {
      thumbnail: '/2.png',
      videoLink: 'https://www.youtube.com/watch?v=project2',
      title: 'Project 2: Digital Event Planner',
    },
    {
      thumbnail: '/3.png',
      videoLink: 'https://www.youtube.com/watch?v=project3',
      title: 'Project 3: Mind-Body Wellness Tracker',
    },
    {
      thumbnail: '/4.png',
      videoLink: 'https://www.youtube.com/watch?v=project3',
      title: 'Project 4: Digital Event Planner',
    },
    {
      thumbnail: '/5.jpg',
      videoLink: 'https://www.youtube.com/watch?v=project3',
      title: 'Project 5: Micro-Jobs Marketplace',
    },
    {
      thumbnail: '/6.jpg',
      videoLink: 'https://www.youtube.com/watch?v=project3',
      title: 'Project 6: Micro-Jobs Marketplace',
    },
    {
      thumbnail: '/7.jpg',
      videoLink: 'https://www.youtube.com/watch?v=project3',
      title: 'Project 7: Mind-Body Wellness Tracker',
    },
    {
      thumbnail: '/8.jpg',
      videoLink: 'https://www.youtube.com/watch?v=project3',
      title: 'Project 8: Mind-Body Wellness Tracker',
    },
    {
      thumbnail: '/9.jpg',
      videoLink: 'https://www.youtube.com/watch?v=project3',
      title: 'Project 9: Micro-Jobs Marketplace',
    },
    {
      thumbnail: '/10.jpg',
      videoLink: 'https://www.youtube.com/watch?v=project3',
      title: 'Project 10: Micro-Jobs Marketplace',
    },
  ];

  // Event Moments (New)
  const eventMoments = [
    { src: '/our/core.jpg', alt: 'Event Moment 1' },
    { src: '/our/all.jpg', alt: 'Event Moment 2' },
    { src: '/our/1.jpg', alt: 'Event Moment 1' },
    { src: '/our/2.jpg', alt: 'Event Moment 2' },
    { src: '/our/3.jpg', alt: 'Event Moment 3' },
    { src: '/our/4.jpg', alt: 'Event Moment 4' },
    { src: '/our/5.jpg', alt: 'Event Moment 1' },
    { src: '/our/6.jpg', alt: 'Event Moment 2' },
    { src: '/our/7.jpg', alt: 'Event Moment 3' },
    { src: '/our/8.jpg', alt: 'Event Moment 4' },
    { src: '/our/9.jpg', alt: 'Event Moment 1' },
    { src: '/our/10.jpg', alt: 'Event Moment 2' },
    { src: '/our/11.jpg', alt: 'Event Moment 3' },
    { src: '/our/12.jpg', alt: 'Event Moment 4' },
    { src: '/our/13.jpg', alt: 'Event Moment 2' },
    { src: '/our/14.jpg', alt: 'Event Moment 3' },
    { src: '/our/15.jpg', alt: 'Event Moment 4' },
    { src: '/our/16.jpg', alt: 'Event Moment 2' },
    { src: '/our/17.jpg', alt: 'Event Moment 3' },
    { src: '/our/18.jpg', alt: 'Event Moment 4' },
    { src: '/our/19.jpg', alt: 'Event Moment 2' },
    { src: '/our/20.jpg', alt: 'Event Moment 3' },
    { src: '/our/21.jpg', alt: 'Event Moment 4' },
    { src: '/our/22.jpg', alt: 'Event Moment 2' },
    { src: '/our/23.jpg', alt: 'Event Moment 3' },
    { src: '/our/24.jpg', alt: 'Event Moment 4' },
    { src: '/our/25.jpg', alt: 'Event Moment 4' },
    { src: '/our/26.jpg', alt: 'Event Moment 2' },
    { src: '/our/27.jpg', alt: 'Event Moment 3' },
    { src: '/our/28.jpg', alt: 'Event Moment 4' },
    { src: '/our/29.jpg', alt: 'Event Moment 3' },
    { src: '/our/30.jpg', alt: 'Event Moment 4' },
  ];


  return (
    <div className="app">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* Custom Cursor */}
          <div
            className="custom-cursor"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
            }}
          ></div>

          {/* Magic Wave Cursor Trail */}
          {trail.map((pos, index) => (
            <div
              key={index}
              className="cursor-trail"
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                opacity: 1 - index / trail.length, // Fade out the trail
                transform: `scale(${1 - index / trail.length})`, // Shrink the trail
              }}
            ></div>
          ))}

<nav className="navbar">
  <div className="navbar-container">
    <div className="navbar-logo">
      <a href="#home">DesignQuest</a>
    </div>
    <div className="navbar-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
      <span className="hamburger"></span>
    </div>
    <ul className={`navbar-menu ${isNavOpen ? "active" : ""}`}>
      <li><a href="#home">🏠 Home</a></li>
      <li><a href="#about">ℹ️ About</a></li>
      <li><a href="#prizes">🏆 Prizes</a></li>
      <li><a href="#schedule">📅 Schedule</a></li>
      <li><a href="#problem-statements">❓ Problems</a></li>
      <li><a href="#gallery">🖼 Gallery</a></li>
      <li><a href="#faqs">❓ FAQs</a></li>
      <li><a href="#contact">📩 Contact</a></li>
    </ul>
  </div>
</nav>

<header id="home" className="hero">
  {/* Left Side - Event Info */}
  <div className="hero-left">
    <p className="event-date">📅 March 14, 2025</p>
    <h1 className="event-title"><img src="/main.png" alt="Design Quest" className="event-logo"/></h1>
    <p className="event-duration">⏳ 7 Hours</p>
    <p className="prize-pool">💰 Prize Pool: ₹7,000</p>
  </div>

  {/* Right Side - Image */}
  <motion.div 
    className="hero-right"
    initial={{ opacity: 0, scale: 0.9 }} 
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 1 }}
  >
    <img src="/log.png" alt="Design Competition" className="hero-image" />
  </motion.div>
</header>

          {/* What is DesignQuest? Section */}
          <section id="about" className="about-section">
            <div className="about-content">
              {/* Left Side - Description */}
              <div className="about-text">
                <h2 className="section-title">🚀 What is DesignQuest?</h2>
                <p className="description">
                  DesignQuest is a thrilling <strong>UI/UX design competition</strong> where creativity meets innovation. Participants will tackle real-world design challenges, craft stunning interfaces, and showcase their skills to win exciting prizes.
                </p>
                <p className="highlight">
                  🎯 <strong>Theme:</strong> Solve real-world problems through design.
                </p>
                <p className="highlight">
                  🏆 <strong>Prizes:</strong> Win from a prize pool of ₹7,000!
                </p>
              </div>

              {/* Right Side - Illustration */}
              <div className="about-image">
                <img src="/main.png" alt="Design Illustration" className="illustration" />
              </div>
            </div>
          </section>

          {/* Prize Split-Up Section */}
          <section id="prizes" className="prize-section">
            <h2 className="section-title">🏆 Prize Split-Up</h2>
            <div className="podium">
              {/* First Runner-Up */}
              <div className="podium-card first-runner">
                <div className="podium-bar"></div>
                <div className="podium-details">
                  <h3>1st Runners-Up</h3>
                  <p>₹2,000</p>
                </div>
              </div>

              {/* Title Winner */}
              <div className="podium-card winner">
                <div className="podium-bar"></div>
                <div className="podium-details">
                  <h3>Title Winners</h3>
                  <p>₹4,000</p>
                </div>
              </div>

              {/* Second Runner-Up */}
              <div className="podium-card second-runner">
                <div className="podium-bar"></div>
                <div className="podium-details">
                  <h3>2nd Runners-Up</h3>
                  <p>₹1,000</p>
                </div>
              </div>
            </div>
          </section>

          {/* Venue Section */}
          <section id="venue" className="venue-section">
            <div className="venue-overlay">
              <h2 className="venue-title">Venue</h2>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section id="cta" className="cta-section">
            <div className="cta-content">
              <h2 className="cta-title">🚀 Ready to Join DesignQuest?</h2>
              <p className="cta-text">Register now and showcase your design skills!</p>
              <a
                href="#" // Replace with your registration link
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Register for Free via DevPost
              </a>
            </div>
          </section>

          {/* Event Schedule Section */}
          <section id="schedule" className="schedule-section">
            <h2 className="section-title">📅 Event Schedule</h2>
            <div className="timeline">
              {/* Event Start */}
              <div className="timeline-item">
                <div className="timeline-icon">⏰</div>
                <div className="timeline-content">
                  <h3>9:00 AM</h3>
                  <p>Event Begins 🚀</p>
                </div>
              </div>

              {/* Lunch Break */}
              <div className="timeline-item">
                <div className="timeline-icon">🍽</div>
                <div className="timeline-content">
                  <h3>12:15 PM</h3>
                  <p>Lunch Break 🍽</p>
                </div>
              </div>

              {/* Judging Time */}
              <div className="timeline-item">
                <div className="timeline-icon">🏆</div>
                <div className="timeline-content">
                  <h3>4:15 PM</h3>
                  <p>Judging Time 🏆</p>
                </div>
              </div>

              {/* Event End */}
              <div className="timeline-item">
                <div className="timeline-icon">🎉</div>
                <div className="timeline-content">
                  <h3>7:00 PM</h3>
                  <p>Event Ends and Prizes are Distributed 🎉</p>
                </div>
              </div>
            </div>
          </section>

          <Router>
  <Routes>
    <Route
      path="/"
      element={
        <section id="problem-statements" className="problem-section">
          <h2 className="section-title">❓ Problem Statements</h2>
          <div className="problem-box">
            {showProblems ? (
              <div className="problem-container">
                {/* Problem Statement 1 */}
                <Link to="/problem-1" className="problem-card problem-1">
                  <div className="problem-icon">🧘‍♂️</div> {/* Updated emoji */}
                  <div className="problem-details">
                    <h3>Problem Statement 1</h3>
                  </div>
                </Link>

                {/* Problem Statement 2 */}
                <Link to="/problem-2" className="problem-card problem-2">
                  <div className="problem-icon">🎉</div> {/* Updated emoji */}
                  <div className="problem-details">
                    <h3>Problem Statement 2</h3>
                  </div>
                </Link>

                {/* Problem Statement 3 */}
                <Link to="/problem-3" className="problem-card problem-3">
                  <div className="problem-icon">💼</div> {/* Updated emoji */}
                  <div className="problem-details">
                    <h3>Problem Statement 3</h3>
                  </div>
                </Link>
              </div>
            ) : (
              <p className="reveal-message">Problem statements will be revealed on March 14, 2025 at 8:30 AM.</p>
            )}
          </div>
        </section>
      }
    />
    <Route path="/problem-1" element={<ProblemStatement1 />} />
    <Route path="/problem-2" element={<ProblemStatement2 />} />
    <Route path="/problem-3" element={<ProblemStatement3 />} />
  </Routes>
</Router>



          {/* Gallery Section */}
          <section id="gallery" className="gallery-section">
      <h2 className="section-title">🖼 Event Gallery</h2>

      {/* Poster Works Section */}
      <h3 className="gallery-subtitle">Poster Works</h3>
      <div className="gallery-grid">
        {posterWorks.map((poster, index) => (
          <div
            key={index}
            className="poster-container"
            onClick={() => {
              setLightboxImage(poster.src);
              setIsLightboxOpen(true);
            }}
          >
            <img
              src={poster.src}
              alt={poster.alt}
              className="poster-image"
            />
            <div className="overlay">
              <p>Click to view full size</p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Works Section */}
      <h3 className="gallery-subtitle">Project Works</h3>
      <div className="gallery-grid">
        {projectWorks.map((project, index) => (
          <a
            key={index}
            href={project.videoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-container"
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="project-thumbnail"
            />
            <div className="overlay">
              <p>Click to view demo</p>
            </div>
          </a>
        ))}
      </div>

      {/* Event Moments Section */}
<h3 className="gallery-subtitle">Event Moments</h3>
<div className="event-moments-grid">
  {eventMoments.map((moment, index) => (
    <div
      key={index}
      className="event-moment-container"
      onClick={() => {
        setLightboxImage(moment.src);
        setIsLightboxOpen(true);
      }}
    >
      <img
        src={moment.src}
        alt={moment.alt}
        className="event-moment-image"
      />
      <div className="event-moment-overlay">
        <p>Click to view full size</p>
      </div>
    </div>
  ))}
</div>

      {/* Custom Lightbox */}
      {isLightboxOpen && (
        <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
          <img
            src={lightboxImage}
            alt="Gallery Image"
            className="lightbox-image"
          />
        </div>
      )}
    </section>

          {/* FAQs Section */}
          <section id="faqs" className="faq-section">
            <h2 className="section-title">❓ FAQs</h2>
            <div className="faq-container">
              {/* FAQ 1 */}
              <div className={`faq-item ${activeIndex === 0 ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(0)}>
                  What is the team size for the competition?
                  <span className="faq-icon">➕</span>
                </button>
                <div className="faq-answer">
                  <p>Each team can have a maximum of 2 members.</p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className={`faq-item ${activeIndex === 1 ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(1)}>
                  Is there a registration fee?
                  <span className="faq-icon">➕</span>
                </button>
                <div className="faq-answer">
                  <p>No, the registration is completely free!</p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className={`faq-item ${activeIndex === 2 ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(2)}>
                  What is the prize pool?
                  <span className="faq-icon">➕</span>
                </button>
                <div className="faq-answer">
                  <p>The total prize pool is ₹7,000, split among the top 3 teams.</p>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className={`faq-item ${activeIndex === 3 ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(3)}>
                  Can I participate individually?
                  <span className="faq-icon">➕</span>
                </button>
                <div className="faq-answer">
                  <p>Teams of up to 2 members are encouraged.</p>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className={`faq-item ${activeIndex === 4 ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(4)}>
                  What is the judging criteria?
                  <span className="faq-icon">➕</span>
                </button>
                <div className="faq-answer">
                  <p>Judging will be based on creativity, usability, and adherence to the problem statement.</p>
                </div>
              </div>
              <div className={`faq-item ${activeIndex === 5 ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(5)}>
                  What is expected to be built?
                  <span className="faq-icon">➕</span>
                </button>
                <div className="faq-answer">
                  <p>The output product of a designathon should be a working prototype of the team's ideas and solutions to the design challenge, and it should be presented in a way that effectively communicates the team's vision and approach.</p>
                </div>
              </div>
              <div className={`faq-item ${activeIndex === 6 ? "active" : ""}`}>
                <button className="faq-question" onClick={() => toggleFAQ(6)}>
                  How can I be shortlisted?
                  <span className="faq-icon">➕</span>
                </button>
                <div className="faq-answer">
                  <p>You’ll be selected based on the design projects you’ve worked on and your social profiles. We prefer you having an updated LinkedIn, Behance & Dribbble profiles.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Partnerships Section */}
          <section id="partners" className="partners-section">
            <h2 className="section-title">🤝 Partnering With</h2>
            <div className="partners-container">
              {/* Partner 1 - Devpost */}
              <a href="https://devpost.com/" target="_blank" rel="noopener noreferrer" className="partner-logo">
                <img src="/devpost.png" alt="DevPost Logo" />
              </a>

              {/* Partner 2 - GTech MuLearn */}
              <a href="https://mulearn.org" target="_blank" rel="noopener noreferrer" className="partner-logo">
                <img src="/mu1.png" alt="GTech MuLearn Logo" />
              </a>

              {/* Partner 3 - Talrop */}
              <a href="https://talrop.com/" target="_blank" rel="noopener noreferrer" className="partner-logo">
                <img src="/talrop.png" alt="Talrop Logo" />
              </a>
            </div>
          </section>

          {/* Meet The Core Team Section */}
          <section id="contact" className="contact-section">
            <h2 className="section-title">🌟 Meet The Core Team</h2>
            
            {/* First Row: First Two Cards */}
            <div className="contact-row">
              {/* Coordinator 1 */}
              <div className="contact-card">
                <img src="/lek.jpg" alt="Lekshmi L" className="contact-image" />
                <div className="contact-details">
                  <h3 className="contact-name">Lekshmi L</h3>
                  <p className="contact-role">Event Lead, Website Lead</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/lekshmi-l/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Coordinator 2 */}
              <div className="contact-card">
                <img src="/adh.jpg" alt="Adhith K L" className="contact-image" />
                <div className="contact-details">
                  <h3 className="contact-name">Adhith K L</h3>
                  <p className="contact-role">Event Lead</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/adhithkl/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row: Next Three Cards */}
            <div className="contact-row">
              {/* Coordinator 3 */}
              <div className="contact-card">
                <img src="/liya.jpg" alt="Liya Francis" className="contact-image" />
                <div className="contact-details">
                  <h3 className="contact-name">Liya Francis</h3>
                  <p className="contact-role">Event Coordinator, Content Writer</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/liyafrancis03/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Coordinator 4 */}
              <div className="contact-card">
                <img src="/dhan.jpg" alt="Dhanisa R" className="contact-image" />
                <div className="contact-details">
                  <h3 className="contact-name">Dhanisa R</h3>
                  <p className="contact-role">Media Lead</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/dhanisar/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Coordinator 5 */}
              <div className="contact-card">
                <img src="/tony.jpg" alt="Tony K Seby" className="contact-image" />
                <div className="contact-details">
                  <h3 className="contact-name">Tony K Seby</h3>
                  <p className="contact-role">Treasurer</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/tonykseby/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <img src="/alan.jpg" alt="Alan Martin" className="contact-image" />
                <div className="contact-details">
                  <h3 className="contact-name">Alan Martin</h3>
                  <p className="contact-role">Event Coordinator</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/alanmartin7/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <img src="/thoma.webp" alt="Thomas Sabu" className="contact-image" />
                <div className="contact-details">
                  <h3 className="contact-name">Thomas Sabu</h3>
                  <p className="contact-role">Event Hospitality Lead</p>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/thomassabu2003/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact-info" className="contact-info-section">
            <h2 className="section-title">📞 Contact Us</h2>
            <div className="light-bg-box">
              {/* Left Side: Phone Numbers and Contact Form */}
              <div className="contact-left">
                {/* Phone Numbers */}
                <div className="contact-details">
                  <h3>Reach Out to Us</h3>
                  <p>For any queries or assistance, feel free to contact:</p>
                  <ul>
                    <li>📱Adhith <a href="tel:+918139820095">+91 8139820095</a></li>
                    <li>📱Lekshmi <a href="tel:+918281075288">+91 8281075288</a></li>
                  </ul>
                </div>

                {/* Contact Form */}
                <div className="contact-form">
                  <h3>✉️ Send Us a Message</h3>
                  <form action="https://formspree.io/f/xanewyjq" method="POST">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>

              {/* Right Side: Google Map */}
              <div className="map-container">
                <h3>📍 Our Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.800873339365!2d76.21013387479867!3d10.357800989766629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f65a7d7bc725%3A0x22dc855ba6cace68!2sChrist%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1741063616768!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer id="footer" className="footer-section">
            <div className="footer-content">
              {/* Event Details */}
              <div className="event-details">
                <h3>DesignQuest 2025</h3>
                <p>📅 March 14, 2025</p>
                <p>📍 Christ College of Engineering, Irinjalakuda</p>
                <p>⏰ 9 AM - 7 PM</p>
              </div>

              {/* Social Media Links */}
              <div className="social-media">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="https://instagram.com/code_cce" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/designquest25/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="copyright">
              <p>© 2025 DesignQuest. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

// Loading Screen Component
// Loading Screen Component
const LoadingScreen = () => {
  const text = "DesignQuest";
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-icons">
          <span className="icon">🎨</span> {/* Design-related icon */}
          <span className="icon">🖌️</span> {/* Design-related icon */}
          <span className="icon">💡</span> {/* Design-related icon */}
        </div>
        <h1 className="loading-text">
          {text.split("").map((letter, index) => (
            <span key={index} className="loading-letter" style={{ animationDelay: `${index * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </h1>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default App;