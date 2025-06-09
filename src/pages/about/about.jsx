import React from 'react';
import { 
  Car, 
  Users, 
  Award, 
  Target, 
  Heart, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Phone
} from 'lucide-react';
import './about.css';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: <Users size={24} /> },
    { number: '5K+', label: 'Cars Sold', icon: <Car size={24} /> },
    { number: '15+', label: 'Years Experience', icon: <Award size={24} /> },
    { number: '50+', label: 'Team Members', icon: <Globe size={24} /> }
  ];

  const values = [
    {
      icon: <Heart size={32} />,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above everything else.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Trust & Reliability',
      description: 'Building long-term relationships through honest and transparent dealings.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation',
      description: 'Embracing technology to provide seamless and modern car buying experience.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Target size={32} />,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every aspect of our service.',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const features = [
    'Wide selection of premium vehicles',
    'Competitive pricing and financing options',
    'Expert maintenance and repair services',
    'Comprehensive insurance assistance',
    '24/7 customer support',
    'Certified quality assurance'
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      experience: '15+ years in automotive industry',
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Sales',
      experience: '12+ years in car sales',
      image: '👨‍💼'
    },
    {
      name: 'Emily Davis',
      role: 'Service Manager',
      experience: '10+ years in automotive service',
      image: '👩‍🔧'
    }
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Car size={20} />
            About Our Company
          </div>
          <h1 className="hero-title">
            Your Trusted Partner in 
            <span className="title-gradient"> Automotive Excellence</span>
          </h1>
          <p className="hero-description">
            Welcome to our Car App! We are passionate about revolutionizing the way you discover, 
            purchase, and maintain your perfect vehicle. With cutting-edge technology and 
            personalized service, we make your automotive journey seamless and enjoyable.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">
              Explore Our Services
              <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <Car size={24} />
            <span>Premium Cars</span>
          </div>
          <div className="floating-card card-2">
            <Shield size={24} />
            <span>Trusted Service</span>
          </div>
          <div className="floating-card card-3">
            <Award size={24} />
            <span>Award Winning</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2 className="section-title">Our Story</h2>
            <p className="story-paragraph">
              Founded in 2009, our journey began with a simple mission: to transform the car 
              buying experience through innovation and exceptional customer service. What started 
              as a small dealership has grown into a comprehensive automotive platform serving 
              thousands of satisfied customers.
            </p>
            <p className="story-paragraph">
              Whether you are looking to buy, finance, or maintain your car, our dedicated team 
              of automotive experts is here to support you every step of the way. We believe that 
              finding your perfect car should be exciting, not stressful.
            </p>
            <div className="story-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <CheckCircle size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="story-visual">
            <div className="visual-card main-card">
              <div className="card-header">
                <h3>Why Choose Us?</h3>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span>4.9/5 Rating</span>
                </div>
              </div>
              <div className="card-content">
                <div className="benefit">
                  <Calendar size={20} />
                  <div>
                    <strong>15+ Years</strong>
                    <span>Industry Experience</span>
                  </div>
                </div>
                <div className="benefit">
                  <MapPin size={20} />
                  <div>
                    <strong>Nationwide</strong>
                    <span>Service Coverage</span>
                  </div>
                </div>
                <div className="benefit">
                  <Phone size={20} />
                  <div>
                    <strong>24/7</strong>
                    <span>Customer Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-header">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do and shape our commitment to excellence.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className={`value-icon bg-gradient-to-r ${value.color}`}>
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-header">
          <h2 className="section-title">Meet Our Leadership</h2>
          <p className="section-subtitle">
            Experienced professionals dedicated to providing you with exceptional automotive solutions.
          </p>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="member-avatar">
                <span className="avatar-emoji">{member.image}</span>
              </div>
              <div className="member-info">
                <h4 className="member-name">{member.name}</h4>
                <p className="member-role">{member.role}</p>
                <p className="member-experience">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h3 className="cta-title">Ready to Start Your Journey?</h3>
          <p className="cta-description">
            Join thousands of satisfied customers who have found their perfect car with us. 
            Let's make your automotive dreams a reality.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Browse Cars</button>
            <button className="cta-btn secondary">Get in Touch</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;