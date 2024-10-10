import React from "react";
import "./style.css";

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Serenify</h1>
          <p>
            Your mental health matters! Your dedicated mental health support
            platform designed to empower students on their well-being journey.
            Whether you're seeking virtual therapy sessions, exploring self-help
            resources, or connecting with peers in our supportive forums,
            Serenify is here to provide a safe and compassionate space.
            Prioritize your mental health with tools tailored to your needs, all
            in one place. Let us help you navigate the challenges of student
            life with care and understanding.
          </p>
          <a href="#services" className="cta-button">
            Explore Services
          </a>
        </div>
        <img
          src="https://img.freepik.com/premium-vector/mental-health-awareness-concept_23-2148533723.jpg"
          alt="Serene mind"
          className="hero-image"
        />
      </section>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <img
              src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-psychotherapy-counseling_516790-424.jpg"
              alt="Counseling"
            />
            <h3>Counseling Sessions</h3>
            <p>
              One-on-one counseling sessions with certified therapists to help
              you navigate life's challenges.
            </p>
          </div>
          <div className="service-card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/026/623/706/original/hobby-painter-cartoon-animation-art-workshop-4k-motion-graphic-painting-class-african-american-female-studio-artist-painting-picture-2d-color-animated-character-isolated-on-white-background-video.jpg"
              alt="Workshops"
            />
            <h3>Workshops on Stress Management</h3>
            <p>
              Interactive workshops designed to help you manage stress, anxiety,
              and more.
            </p>
          </div>
          <div className="service-card">
            <img
              src="https://cdn.prod.website-files.com/61cdf3c5e0b8152652e01082/65c4d4dfc0c2ff01bd3e87bd_video%20animation.jpg"
              alt="Resources"
            />
            <h3>Online Resources</h3>
            <p>
              A vast library of articles, videos, and tools to support your
              mental health journey.
            </p>
          </div>
          <div className="service-card">
            <img
              src="https://t3.ftcdn.net/jpg/09/81/22/56/360_F_981225682_JlqDSOOVTeic1DczxhAgsR0yVzdEZJ1k.jpg"
              alt="Peer Support"
            />
            <h3>Peer Support Groups</h3>
            <p>
              Join support groups to connect with peers who share similar
              experiences.
            </p>
          </div>
        </div>
      </section>

      <section id="resources" className="resources">
        <h2>Helpful Resources</h2>
        <p>
          Explore a collection of articles, videos, and guides to help you stay
          mentally strong.
        </p>
        <div className="resource-grid">
          <div className="resource-card">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1086628820/thumb/10.jpg?ip=x480"
              alt="Mindfulness"
            />
            <h3>Mindfulness Practices</h3>
            <p>
              Learn simple yet powerful mindfulness techniques to improve focus
              and reduce stress.
            </p>
          </div>
          <div className="resource-card">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1097635537/thumb/1.jpg?ip=x480"
              alt="Self-Care"
            />
            <h3>Self-Care Tips</h3>
            <p>
              Find practical tips and routines to take better care of your
              mental and emotional well-being.
            </p>
          </div>
          <div className="resource-card">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/013/213/983/small_2x/brain-holding-heart-mental-health-concept-cute-kawaii-cartoon-character-animation-isolated-on-white-and-green-background-free-video.jpg"
              alt="Mental Health Guides"
            />
            <h3>Mental Health Guides</h3>
            <p>
              Comprehensive guides on managing anxiety, depression, and other
              mental health conditions.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>If you need help or want to learn more, reach out to us anytime.</p>
        <p>Email: support@serenify.com</p>
        <p>Phone: (555) 123-4567</p>
        <div className="social-media">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
