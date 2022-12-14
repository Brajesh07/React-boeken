import React from 'react';
function Header() {
    return (
        <header>
        <div className="top-headline">
            <p><img src="img/tree.jpg" alt="" srcset="" /><span>1,240</span> Trees planted so far through lorem ipsum
                dolor </p>
        </div>
        <div className="main-headline">
            <a href="#">
                <img src="img/Boeken-Logo (1).png" alt="" />
            </a>
            <div className="search ">
                <form action="" method="post">
                    <input type="text" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                <div className="signup">
                    <button>Sign in<i className="fa-solid fa-user"></i></button>
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>1</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mobile-main-heading">
            <div className="top-menu">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">                    
                    <i className="fa-solid fa-bars"></i>
                  </button>
                
                <a href="#">
                    <img src="img/Boeken-Logo (1).png" alt="" />
                </a>

                <div className="top-signup">
                    <a href="">
                        <i className="fa-solid fa-user"></i>
                    </a>
                    <div className="cart">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <span>1</span>
                    </div>
                </div>
            </div>

            <div className="form">
                <form action="" method="post">
                    <input type="text" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>

        </div>
        
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <a href="#">Jewelry</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Home & Living</a>
              </li>
              <li>
                <a href="#">Art & Collectibles</a>
              </li>
              <li>
                <a href="#">Craft Supplies</a>
              </li>
              <li>
                <a href="#">Vintage</a>
              </li>              
              <li>
                <a href="#">Gift Vouchers</a>
              </li>              
            </ul>
          </div>

        <div className="nav-bar">
            <a href="#">Jewelry</a>
            <a href="#">Clothing</a>
            <a href="#">Home & Living</a>
            <a href="#">Art & Collectibles</a>
            <a href="#">Craft Supplies</a>
            <a href="#">Vintage</a>
            <a href="#">Gift Vouchers</a>
        </div>
    </header>
    )
}

export default Header