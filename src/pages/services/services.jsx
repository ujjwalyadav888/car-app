import React from 'react';
import { Car, CreditCard, Wrench, Shield, ArrowRight, Star } from 'lucide-react';
import "./services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Car Sales",
      description: "Browse and purchase new and used cars from top brands at competitive prices with our extensive inventory.",
      icon: <Car size={32} />,
      features: ["New & Used Cars", "Top Brands", "Competitive Pricing", "Quality Assured"],
      color: "from-blue-500 to-blue-600",
      popular: false
    },
    {
      id: 2,
      title: "Car Financing",
      description: "Flexible financing options to help you drive away in your dream car with easy approval process.",
      icon: <CreditCard size={32} />,
      features: ["Flexible Terms", "Quick Approval", "Low Interest Rates", "No Hidden Fees"],
      color: "from-green-500 to-green-600",
      popular: true
    },
    {
      id: 3,
      title: "Car Maintenance",
      description: "Professional maintenance and repair services to keep your car running smoothly with certified technicians.",
      icon: <Wrench size={32} />,
      features: ["Expert Technicians", "Genuine Parts", "Quick Service", "Warranty Coverage"],
      color: "from-orange-500 to-orange-600",
      popular: false
    },
    {
      id: 4,
      title: "Insurance Assistance",
      description: "Get help finding the best insurance plans for your vehicle and budget with personalized recommendations.",
      icon: <Shield size={32} />,
      features: ["Best Rates", "Multiple Options", "Expert Advice", "Claims Support"],
      color: "from-purple-500 to-purple-600",
      popular: false
    }
  ];

  return (
    <div className="services-container">
      {/* Header Section */}
      <div className="services-header">
        <div className="header-content">
          <span className="header-badge">Our Services</span>
          <h1 className="services-title">
            Comprehensive Auto Services
            <span className="title-accent"> for Every Need</span>
          </h1>
          <p className="services-subtitle">
            From finding your perfect car to keeping it in top condition, we provide end-to-end 
            automotive solutions with professional expertise and customer-first approach.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-card ${service.popular ? 'popular' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {service.popular && (
              <div className="popular-badge">
                <Star size={16} />
                Most Popular
              </div>
            )}
            
            <div className="card-header">
              <div className={`service-icon bg-gradient-to-r ${service.color}`}>
                {service.icon}
              </div>
              <h2 className="service-title">{service.title}</h2>
            </div>

            <div className="card-content">
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-footer">
              <button className="service-btn">
                Learn More
                <ArrowRight size={18} className="btn-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="services-cta">
        <div className="cta-content">
          <h3 className="cta-title">Ready to Get Started?</h3>
          <p className="cta-description">
            Contact us today to learn more about our services and how we can help you.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary">Get Quote</button>
            <button className="cta-btn secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
