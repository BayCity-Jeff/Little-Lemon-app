import React from 'react';


function Main({children}) {
    return (
        <div className="main">
            <div className="hero">
                <div className='box2'>
                    <div className="hero_txt">
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <br></br>
                        <p>We are a family owned Mediteranian restaurant,
                        focused on traditional recipes served with a modern twist.</p>
                        <button>Reserve a Table</button>
                    </div>
                    <img src="restauranfood.jpg" />
                </div>
            </div>
            <div className="highlights">
                <div className="hl_txt">
                    <h1>This weeks specials!<button>Online Menu</button></h1>
                </div>
                <div className='boxes'>
                    <div className='box5'>
                        <img src="greek salad.jpg" />
                        <div className='tbox'>
                            <h1>Greek Salad<h2>$12.99</h2></h1>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, 
                                garnished with crunchy garlic and rosemary croutons. </p>
                            <h3>Order a delivery<img src="scooter.png" /></h3>
                        </div>
                    </div>
                    <div className='box6'>
                        <img src="brushetta.jpg" />
                        <div className='tbox'>
                            <h1>Brushetta<h2>$ 5.99</h2></h1>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <br></br>
                            <h3>Order a delivery<img src="scooter.png" /></h3>
                        </div>
                    </div>
                    <div className='box7'>
                        <img src="lemon dessert.jpg" />
                        <div className='tbox'>
                            <h1>Lemon Dessert<h2>$ 5.00</h2></h1>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and 
                                is as authentic as can be imagined</p>
                            <h3>Order a delivery<img src="scooter.png" /></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials">TESTIMONIALS</div>
            <div className="about">ABOUT</div>
        </div>
    )
}

export default Main