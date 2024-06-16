import React from 'react';
import './PlumbingServices.css';

const PlumbingServices = () => {
    const services = [
        {
            category: "Residential Plumbing Services",
            items: [
                "Leak Repairs",
                "Pipe Installation and Repair",
                "Drain Cleaning",
                "Fixture Installation and Repair",
                "Water Heater Services",
                "Garbage Disposal Repair and Installation",
                "Sump Pump Services",
                "Water Filtration Systems",
                "Outdoor Plumbing",
                "Repiping",
            ],
        },
        {
            category: "Commercial Plumbing Services",
            items: [
                "Pipe and Fixture Installation",
                "Drain and Sewer Line Services",
                "Water Heater Services",
                "Backflow Prevention",
                "Plumbing System Maintenance",
                "Restroom Plumbing",
                "Grease Trap Services",
                "Gas Line Installation and Repair",
            ],
        },
        {
            category: "Emergency Plumbing Services",
            items: [
                "Emergency Leak Repairs",
                "Clog Removal",
                "Sewer Backup",
                "Water Heater Failure",
                "Flooding Response",
            ],
        },
        {
            category: "Specialized Plumbing Services",
            items: [
                "Hydro Jetting",
                "Trenchless Pipe Repair",
                "Video Inspection",
                "Water Pressure Adjustment",
                "Water Softening",
            ],
        },
    ];

    return (
        <div className="plumbing-services" id="plumbingservices">
            <h1>Plumbing Services</h1>
            <div className="service-categories">
                {services.map((service, index) => (
                    <div key={index} className="service-category">
                        <h2>{service.category}</h2>
                        <ul>
                            {service.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlumbingServices;
