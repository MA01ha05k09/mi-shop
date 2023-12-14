// Home.jsx

import React from 'react';
import "../styles/home.css"

const products = [
  { id: 1, name: 'MI TV', price: 19.99, image: 'https://i01.appmifile.com/webfile/globalimg/in/cms/9E8A096E-085A-B3CD-FB95-D0322641483D!800x800!85.jpg' },
  { id: 2, name: 'MI MOBAILE', price: 29.99, image: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1672738688.24231648!500x500.jpg' },
  { id: 3, name: 'MI BAG', price: 39.99, image: 'https://m.media-amazon.com/images/I/81Jl35NKmbL.jpg' },
  { id: 4, name: 'BLUTOOTH SPEAKER', price: 49.99, image: 'https://www.jiomart.com/images/product/original/491936013/mi-smart-speaker-with-google-assistant-black-digital-o491936013-p590440909-2-202108121605.jpeg?im=Resize=(420,420)' },
  { id: 5, name: 'POWER BANK', price: 59.99, image: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1600435576.89141134!800x800!85.png' },
];

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <img src="https://img.freepik.com/premium-vector/diwali-white-background-banner_724510-116.jpg?w=2000" alt="Banner" />
      </section>

      <section className="product-list">
        <h2>Featured Products</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              {/* Add other product details or actions */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
