import React from "react";

interface Experience {
  image: string;
  title: string;
  location: string;
  price: string;
}

const experiences: Experience[] = [
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Kayaking",
    location: "Udupi",
    price: "₹999",
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Nandi Hills Sunrise",
    location: "Bangalore",
    price: "₹899",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Coffee Trail",
    location: "Coorg",
    price: "₹1299",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Kayaking",
    location: "Udupi, Karnataka",
    price: "₹999",
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Nandi Hills Sunrise",
    location: "Bangalore",
    price: "₹899",
  },
  {
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    title: "Boat Cruise",
    location: "Bhandardara",
    price: "₹999",
  },
  {
    image: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef",
    title: "Bungee Jumping",
    location: "Manali",
    price: "₹999",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Coffee Trail",
    location: "Coorg",
    price: "₹1299",
  },
];

const MainPage: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "30px 60px",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "24px",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "transform 0.2s ease",
            }}
          >
            <img
              src={exp.image}
              alt={exp.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "12px 16px" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                {exp.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "#555",
                  marginBottom: "6px",
                }}
              >
                {exp.location}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#777",
                  marginBottom: "8px",
                }}
              >
                Curated small group experience. Certified guides. Safety first
                with gear included.
              </p>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#000",
                  marginBottom: "10px",
                }}
              >
                From {exp.price}
              </p>
              <button
                style={{
                  backgroundColor: "#ffcc00",
                  border: "none",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  fontSize: "13px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;