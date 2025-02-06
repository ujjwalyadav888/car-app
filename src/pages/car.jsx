import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import askAI from "../util/askAI";
import './car.css';

const Car = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const { carmodel } = useParams();

  async function showData() {
    try {
      setLoading(true);
      let res = await askAI(`give me a basic information about ${carmodel} and encourage me to buy it and every informtion in a points`);
      setData(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    showData();
  }, [carmodel]);

  return (
    <div className="car-container">
      <div className="car-header">
        <h1 className="car-title">{carmodel}</h1>
      </div>
      
      <div className="car-description">
        <p>Discover the extraordinary features and capabilities of the {carmodel}. 
           Our detailed overview will help you make an informed decision about your next vehicle.</p>
      </div>

      <div className="car-details">
        <h2 className="car-subtitle">Key Features of {carmodel}</h2>
        {loading ? (
          <div className="loading-spinner">
            <Loader2 className="spinner" />
            <span>Loading car information...</span>
          </div>
        ) : (
          <div className="car-info">
            <p>{data}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Car;