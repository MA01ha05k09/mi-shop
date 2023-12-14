import React from 'react'
import "../styles/productreview.css"

function Productreview() {
    return (
        <>
            {/* main div */}
            <div className=' d-flex p-5 ' >
                <div>
                    <img className='review-product-img mx-2' src='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/G/31/img23/Wireless/Xiaomi/Redmi13C/dec9th/D105966346_INWLD_Redmi13C_NewLaunch_catpage_1400x8001._SX414_QL85_.jpg' />
                    <div className='ms-3' >
                        <h6>PRO DISPLAY. PRO CAMERS</h6>
                        <p>REDMI NOTE 13 C </p>
                    </div>
                </div>
                <div>
                    <img className='review-product-img mx-2' src='https://www.reliancedigital.in/medias/Tecno-Pop-5599-M.jpg?context=bWFzdGVyfGltYWdlc3w0NDkwMnxpbWFnZS9qcGVnfGltYWdlcy9oMDQvaGM0LzEwMDg1MDA4Mjc3NTM0LmpwZ3wwOTExOGY2YzQ1ZTYyZDFmZTFmNTY1ZGM5OTIwNjllZDhlYjIzMWI0ZjMwOWZlZjlkY2FjYWQwMWI3ZThjMzY4&w=412&h=232' />
                    <div className='ms-3' >
                    <h6>TRULY SMART. TRULY SAFE. TRULY CONVENIENT</h6>
                    <p>Tecno Pop 7 pro</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Productreview