import React from "react";
import "../styles/StarProduct.css";
const StarProduct = () => {
  return (
    <div className="main-div">
      {/* div 1 */}
      <div className="poweband-div">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRO7xw0XKW7HQwmEMfPiZMW6NQrqZ67nIULQ&usqp=CAU"
          alt="power bank"className="power-bank-imge"
        />
      </div>
      {/* div 2 */}
      <div className="multi-image-div" >
        <img
          src="https://i01.appmifile.com/webfile/globalimg/13/014EC6AC-D36E-3ECE-1F8D-BC542ED7960F.jpg"
          alt="smart band"
          className="smart-band"
        />

        <img
          src="https://content.jdmagicbox.com/quickquotes/images_main/mi-earphones-with-mic-white-168941172-6e5z0.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit"
          alt="earphones "
          className="smart-band"

        />
      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqAIE1YbS2Y-tW3F8OytiGSIdqaXTyMli-Q&usqp=CAU"
          alt="mi business casual backpack"
          className="bag-imge"
        />
        
      </div>
    </div>
  );
};

export default StarProduct;
