import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './carcompany.css'; 
import { Link } from 'react-router-dom';

const CarCompany = () => {
  const [carmodel, setCarmodel] = useState([
   
    
      {
        id: 1,
        carbrand: "Toyota",
        carmodel: "Corolla",
        year: "2021",
        price: "$20,000",
        src: "img"
      },
      {
        id: 2,
        carbrand: "Honda",
        carmodel: "Civic",
        year: "2022",
        price: "$22,500",
        src: "img"
      },
      {
        id: 3,
        carbrand: "Ford",
        carmodel: "Mustang",
        year: "2021",
        price: "$35,000",
        src: "img"
      },
      {
        id: 4,
        carbrand: "Tesla",
        carmodel: "Model 3",
        year: "2022",
        price: "$45,000",
        src: "img"
      },
      {
        id: 5,
        carbrand: "BMW",
        carmodel: "3 Series",
        year: "2021",
        price: "$41,250",
        src: "img"
      },
      {
        id: 6,
        carbrand: "Mercedes-Benz",
        carmodel: "C-Class",
        year: "2022",
        price: "$43,500",
        src: "img"
      },
      {
        id: 7,
        carbrand: "Audi",
        carmodel: "A4",
        year: "2021",
        price: "$39,900",
        src: "img"
      },
      {
        id: 8,
        carbrand: "Chevrolet",
        carmodel: "Camaro",
        year: "2022",
        price: "$30,000",
        src: "img"
      },
      {
        id: 9,
        carbrand: "Volkswagen",
        carmodel: "Golf",
        year: "2021",
        price: "$24,500",
        src: "img"
      },
      {
        id: 10,
        carbrand: "Hyundai",
        carmodel: "Elantra",
        year: "2022",
        price: "$21,000",
        src: "img"
      },
      {
        id: 11,
        carbrand: "Kia",
        carmodel: "K5",
        year: "2021",
        price: "$23,700",
        src: "img"
      },
      {
        id: 12,
        carbrand: "Mazda",
        carmodel: "Mazda3",
        year: "2022",
        price: "$22,800",
        src: "img"
      },
      {
        id: 13,
        carbrand: "Subaru",
        carmodel: "Impreza",
        year: "2021",
        price: "$19,500",
        src: "img"
      },
      {
        id: 14,
        carbrand: "Nissan",
        carmodel: "Altima",
        year: "2022",
        price: "$24,900",
        src: "img"
      },
      {
        id: 15,
        carbrand: "Lexus",
        carmodel: "ES",
        year: "2021",
        price: "$40,900",
        src: "img"
      },
      {
        id: 16,
        carbrand: "Acura",
        carmodel: "TLX",
        year: "2022",
        price: "$37,500",
        src: "img"
      },
      {
        id: 17,
        carbrand: "Infiniti",
        carmodel: "Q50",
        year: "2021",
        price: "$36,700",
        src: "img"
      },
      {
        id: 18,
        carbrand: "Porsche",
        carmodel: "911",
        year: "2022",
        price: "$101,200",
        src: "img"
      },
      {
        id: 19,
        carbrand: "Jaguar",
        carmodel: "XE",
        year: "2021",
        price: "$39,900",
        src: "img"
      },
      {
        id: 20,
        carbrand: "Land Rover",
        carmodel: "Range Rover",
        year: "2022",
        price: "$92,000",
        src: "img"
      },
      {
        id: 21,
        carbrand: "Volvo",
        carmodel: "S60",
        year: "2021",
        price: "$38,950",
        src: "img"
      },
      {
        id: 22,
        carbrand: "Genesis",
        carmodel: "G70",
        year: "2022",
        price: "$37,525",
        src: "img"
      },
      {
        id: 23,
        carbrand: "Chrysler",
        carmodel: "300",
        year: "2021",
        price: "$31,540",
        src: "img"
      },
      {
        id: 24,
        carbrand: "Dodge",
        carmodel: "Charger",
        year: "2022",
        price: "$32,500",
        src: "img"
      },
      {
        id: 25,
        carbrand: "Jeep",
        carmodel: "Grand Cherokee",
        year: "2021",
        price: "$34,220",
        src: "img"
      },
      {
        id: 26,
        carbrand: "Ram",
        carmodel: "1500",
        year: "2022",
        price: "$32,795",
        src: "img"
      },
      {
        id: 27,
        carbrand: "GMC",
        carmodel: "Sierra",
        year: "2021",
        price: "$29,700",
        src: "img"
      },
      {
        id: 28,
        carbrand: "Cadillac",
        carmodel: "CT5",
        year: "2022",
        price: "$37,295",
        src: "img"
      },
      {
        id: 29,
        carbrand: "Buick",
        carmodel: "Encore",
        year: "2021",
        price: "$24,600",
        src: "img"
      },
      {
        id: 30,
        carbrand: "Lincoln",
        carmodel: "Aviator",
        year: "2022",
        price: "$51,465",
        src: "img"
      },
      {
        id: 31,
        carbrand: "Toyota",
        carmodel: "Camry",
        year: "2021",
        price: "$25,295",
        src: "img"
      },
      {
        id: 32,
        carbrand: "Honda",
        carmodel: "Accord",
        year: "2022",
        price: "$26,120",
        src: "img"
      },
      {
        id: 33,
        carbrand: "Ford",
        carmodel: "Explorer",
        year: "2021",
        price: "$32,675",
        src: "img"
      },
      {
        id: 34,
        carbrand: "Tesla",
        carmodel: "Model Y",
        year: "2022",
        price: "$53,990",
        src: "img"
      },
      {
        id: 35,
        carbrand: "BMW",
        carmodel: "X3",
        year: "2021",
        price: "$43,000",
        src: "img"
      },
      {
        id: 36,
        carbrand: "Mercedes-Benz",
        carmodel: "GLC",
        year: "2022",
        price: "$43,200",
        src: "img"
      },
      {
        id: 37,
        carbrand: "Audi",
        carmodel: "Q5",
        year: "2021",
        price: "$43,300",
        src: "img"
      },
      {
        id: 38,
        carbrand: "Chevrolet",
        carmodel: "Silverado",
        year: "2022",
        price: "$29,300",
        src: "img"
      },
      {
        id: 39,
        carbrand: "Volkswagen",
        carmodel: "Tiguan",
        year: "2021",
        price: "$25,245",
        src: "img"
      },
      {
        id: 40,
        carbrand: "Hyundai",
        carmodel: "Tucson",
        year: "2022",
        price: "$25,350",
        src: "img"
      },
      {
        id: 41,
        carbrand: "Kia",
        carmodel: "Telluride",
        year: "2021",
        price: "$32,190",
        src: "img"
      },
      {
        id: 42,
        carbrand: "Mazda",
        carmodel: "CX-5",
        year: "2022",
        price: "$25,900",
        src: "img"
      },
      {
        id: 43,
        carbrand: "Subaru",
        carmodel: "Outback",
        year: "2021",
        price: "$26,795",
        src: "img"
      },
      {
        id: 44,
        carbrand: "Nissan",
        carmodel: "Rogue",
        year: "2022",
        price: "$26,050",
        src: "img"
      },
      {
        id: 45,
        carbrand: "Lexus",
        carmodel: "RX",
        year: "2021",
        price: "$45,070",
        src: "img"
      },
      {
        id: 46,
        carbrand: "Acura",
        carmodel: "RDX",
        year: "2022",
        price: "$38,400",
        src: "img"
      },
      {
        id: 47,
        carbrand: "Infiniti",
        carmodel: "QX50",
        year: "2021",
        price: "$37,950",
        src: "img"
      },
      {
        id: 48,
        carbrand: "Porsche",
        carmodel: "Cayenne",
        year: "2022",
        price: "$67,500",
        src: "img"
      },
      {
        id: 49,
        carbrand: "Jaguar",
        carmodel: "F-PACE",
        year: "2021",
        price: "$49,995",
        src: "img"
      },
      {
        id: 50,
        carbrand: "Land Rover",
        carmodel: "Discovery",
        year: "2022",
        price: "$53,900",
        src: "img"
      },
      {
        id: 51,
        carbrand: "Toyota",
        carmodel: "RAV4",
        year: "2021",
        price: "$26,350",
        src: "img"
      },
      {
        id: 52,
        carbrand: "Honda",
        carmodel: "CR-V",
        year: "2022",
        price: "$25,750",
        src: "img"
      },
      {
        id: 53,
        carbrand: "Ford",
        carmodel: "F-150",
        year: "2021",
        price: "$29,290",
        src: "img"
      },
      {
        id: 54,
        carbrand: "Tesla",
        carmodel: "Model X",
        year: "2022",
        price: "$89,990",
        src: "img"
      },
      {
        id: 55,
        carbrand: "BMW",
        carmodel: "5 Series",
        year: "2021",
        price: "$54,200",
        src: "img"
      },
      {
        id: 56,
        carbrand: "Mercedes-Benz",
        carmodel: "E-Class",
        year: "2022",
        price: "$54,950",
        src: "img"
      },
      {
        id: 57,
        carbrand: "Audi",
        carmodel: "A6",
        year: "2021",
        price: "$54,900",
        src: "img"
      },
      {
        id: 58,
        carbrand: "Chevrolet",
        carmodel: "Tahoe",
        year: "2022",
        price: "$49,600",
        src: "img"
      },
      {
        id: 59,
        carbrand: "Volkswagen",
        carmodel: "Passat",
        year: "2021",
        price: "$23,995",
        src: "img"
      },
      {
        id: 60,
        carbrand: "Hyundai",
        carmodel: "Santa Fe",
        year: "2022",
        price: "$27,200",
        src: "img"
      },
      {
        id: 61,
        carbrand: "Kia",
        carmodel: "Sportage",
        year: "2021",
        price: "$24,090",
        src: "img"
      },
      {
        id: 62,
        carbrand: "Mazda",
        carmodel: "CX-9",
        year: "2022",
        price: "$34,160",
        src: "img"
      },
      {
        id: 63,
        carbrand: "Subaru",
        carmodel: "Forester",
        year: "2021",
        price: "$24,795",
        src: "img"
      },
      {
        id: 64,
        carbrand: "Nissan",
        carmodel: "Maxima",
        year: "2022",
        price: "$37,240",
        src: "img"
      },
      {
        id: 65,
        carbrand: "Lexus",
        carmodel: "IS",
        year: "2021",
        price: "$39,000",
        src: "img"
      },
      {
        id: 66,
        carbrand: "Acura",
        carmodel: "MDX",
        year: "2022",
        price: "$46,900",
        src: "img"
      },
      {
        id: 67,
        carbrand: "Infiniti",
        carmodel: "QX60",
        year: "2021",
        price: "$44,350",
        src: "img"
      },
      {
        id: 68,
        carbrand: "Porsche",
        carmodel: "Macan",
        year: "2022",
        price: "$52,100",
        src: "img"
      },
      {
        id: 69,
        carbrand: "Jaguar",
        carmodel: "F-TYPE",
        year: "2021",
        price: "$61,600",
        src: "img"
      },
      {
        id: 70,
        carbrand: "Land Rover",
        carmodel: "Defender",
        year: "2022",
        price: "$47,700",
        src: "img"
      },
      {
        id: 71,
        carbrand: "Volvo",
        carmodel: "XC90",
        year: "2021",
        price: "$49,000",
        src: "img"
      },
      {
        id: 72,
        carbrand: "Genesis",
        carmodel: "GV80",
        year: "2022",
        price: "$48,900",
        src: "img"
      },
      {
        id: 73,
        carbrand: "Chrysler",
        carmodel: "Pacifica",
        year: "2021",
        price: "$35,045",
        src: "img"
      },
      {
        id: 74,
        carbrand: "Dodge",
        carmodel: "Durango",
        year: "2022",
        price: "$33,260",
        src: "img"
      },
      {
        id: 75,
        carbrand: "Jeep",
        carmodel: "Wrangler",
        year: "2021",
        price: "$28,900",
        src: "img"
      },
      {
        id: 76,
        carbrand: "Ram",
        carmodel: "2500",
        year: "2022",
        price: "$34,000",
        src: "img"
      },
      {
        id: 77,
        carbrand: "GMC",
        carmodel: "Yukon",
        year: "2021",
        price: "$51,000",
        src: "img"
      },
      {
        id: 78,
        carbrand: "Cadillac",
        carmodel: "Escalade",
        year: "2022",
        price: "$76,195",
        src: "img"
      },
      {
        id: 79,
        carbrand: "Buick",
        carmodel: "Enclave",
        year: "2021",
        price: "$40,000",
        src: "img"
      },
      {
        id: 80,
        carbrand: "Lincoln",
        carmodel: "Navigator",
        year: "2022",
        price: "$76,185",
        src: "img"
      },
      {
        id: 81,
        carbrand: "Toyota",
        carmodel: "Sienna",
        year: "2021",
        price: "$34,460",
        src: "img"
      },
      {
        id: 82,
        carbrand: "Honda",
        carmodel: "Odyssey",
        year: "2022",
        price: "$32,090",
        src: "img"
      },
      {
        id: 83,
        carbrand: "Ford",
        carmodel: "Escape",
        year: "2021",
        price: "$24,885",
        src: "img"
      },
      {
        id: 84,
        carbrand: "Tesla",
        carmodel: "Model S",
        year: "2022",
        price: "$94,990",
        src: "img"
      },
      {
        id: 85,
        carbrand: "BMW",
        carmodel: "X5",
        year: "2021",
        price: "$59,400",
        src: "img"
      },
      {
        id: 86,
        carbrand: "Mercedes-Benz",
        carmodel: "GLE",
        year: "2022",
        price: "$54,750",
        src: "img"
      },
      {
        id: 87,
        carbrand: "Audi",
        carmodel: "Q7",
        year: "2021",
        price: "$54,950",
        src: "img"
      },
      {
        id: 88,
        carbrand: "Chevrolet",
        carmodel: "Equinox",
        year: "2022",
        price: "$23,800",
        src: "img"
      },
      {
        id: 89,
        carbrand: "Volkswagen",
        carmodel: "Atlas",
        year: "2021",
        price: "$31,545",
        src: "img"
      },
      {
        id: 90,
        carbrand: "Hyundai",
        carmodel: "Palisade",
        year: "2022",
        price: "$32,675",
        src: "img"
      },
      {
        id: 91,
        carbrand: "Kia",
        carmodel: "Sorento",
        year: "2021",
        price: "$29,390",
        src: "img"
      },
      {
        id: 92,
        carbrand: "Mazda",
        carmodel: "CX-30",
        year: "2022",
        price: "$23,000",
        src: "img"
      },
      {
        id: 93,
        carbrand: "Subaru",
        carmodel: "Crosstrek",
        year: "2021",
        price: "$22,245",
        src: "img"
      },
      {
        id: 94,
        carbrand: "Nissan",
        carmodel: "Kicks",
        year: "2022",
        price: "$19,500",
        src: "img"
      },
      {
        id: 95,
        carbrand: "Lexus",
        carmodel: "NX",
        year: "2021",
        price: "$37,610",
        src: "img"
      },
      {
        id: 96,
        carbrand: "Acura",
        carmodel: "ILX",
        year: "2022",
        price: "$26,100",
        src: "img"
      },
      {
        id: 97,
        carbrand: "Infiniti",
        carmodel: "QX80",
        year: "2021",
        price: "$69,050",
        src: "img"
      },
      {
        id: 98,
        carbrand: "Porsche",
        carmodel: "Panamera",
        year: "2022",
        price: "$87,200",
        src: "img"
      },
      {
        id: 99,
        carbrand: "Jaguar",
        carmodel: "I-PACE",
        year: "2021",
        price: "$69,900",
        src: "img"
      },
      {
        id: 100,
        carbrand: "Land Rover",
        carmodel: "Range Rover Sport",
        year: "2022",
        price: "$69,500",
        src: "img"
      },
      {
        id: 101,
        carbrand: "Volvo",
        carmodel: "XC60",
        year: "2021",
        price: "$41,700",
        src: "img"
      },
      {
        id: 102,
        carbrand: "Genesis",
        carmodel: "G80",
        year: "2022",
        price: "$43,800",
        src: "img"
      },

    

  ]);
  const { carbrand } = useParams();

  return (
    <div className="car-company-container">
      <div className="inner-container">
        <h1 className="main-title">Car Company</h1>
        <h2 className="brand-title">{carbrand}</h2>
        
        <div className="car-grid">
          {carmodel
            .filter(car => car.carbrand === carbrand)
            .map(car => (
              <Link to={`/cars/${car.carmodel}`}>
                <div key={car.id} className="car-card">
                <div className="car-image-container">
                  <img 
                    
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALUAwgMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABAMCAQcF/8QALhABAAIBAgIIBgIDAAAAAAAAAAEDAgQREpITFDE0UlNy4SEyQVFzoSLBJGFx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAZEQEBAQEBAQAAAAAAAAAAAAAAAREhMUH/2gAMAwEAAhEDEQA/APtgCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACa2+ybZp0+MTlHzZT2YvODW+dXy+y4aqEvR6zz6+X2Oj1nn18vsYmqhL0es8+vl9jo9Z59fL7GGqhL0es8+vl9nk3X6eY6xGOVcztx4/Qw1WPHqKAAAAAAAAAAAAAAAAl0PbfP1myVSXQ9l35ZVLfSACAPJ7J2naXNcZY4RGeXFlHblttuDtjq4301m/hbMdV3a30yQe6ad9PV6YastL3ar0w1KAAAAAAAAAAAAAAAAJdD2XfllUl0PZd+WXeov6PbDCOK3L5cVvqfHt+orp2jLecp7McY3lxhrK5yjHPHOuZ7OONnWno6PfPOeK3L5smlteNuE4ZxvE/o4ddiOqzLT5xTfO+M/Jn/AFLvUX5cfQ0fG2e2fpiYapY6ru1vpll1PLbedRbx/fdnZdnhVZRqPn4Z4cvpkSGqtL3ar0w1ZaXu1XphqlUAAAAAAAAAAAAAAAB+dTf0UW4YRxW5WTwx/arT0dHvnnPFbl82TLQ448V2e38ukmN/9LFqQARXFteNuE4ZxvE/pJp/8S2arYjbOf42ff8A6ucW1424ThnG8T+llTHbDW4Y5afOco+OMbxP2a14cGGOG8ztG28s9V3a30yk9V7pe7VemGrLS92q9MNSgAAAAAAAAAAAAAAACPTZRVfbTn8Jyy4sd/rus2Z3U13RtZjv9p+zDqFPis5l5UV7GyTqFXis5jqFXis5jh1XsbJOoVeKzmOoVeKzmOHVeybXWRhTlh255/CMfq56hV4rOZpTpaqcuLHHfL75TvJw60pxnCrDCe3HGIl2CKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
                    alt={car.carbrand}
                    className="car-image"
                  />
                </div>
                <div className="car-details">
                  <h3 className="car-model">{car.carmodel}</h3>
                  <p className="car-info">
                    <span className="car-year-label">Year: </span>
                    {car.year}
                  </p>
                  <p className="car-price">{car.price}</p>
                </div>
              </div>
            
              </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CarCompany;
