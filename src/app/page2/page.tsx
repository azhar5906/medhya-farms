const Card = () => {
    return (
      <div className="card">
        <h1 className="hero">HERO SECTION</h1>
      </div>
    )
  }

  const Best=()=>{
    return(
        <div className="intro">Best of the season</div>
    )
  }
  const QuickIntro=()=>{
    return(
    <>      
      <div className="intro-box"></div>
    </>
    )
  }
  

  const IntroBox=()=>{
    return(
      <div className="intro-container">
        <QuickIntro />
        <QuickIntro /> 
      </div>
    )
  }
  const Circle = () => {
    return (
      <div className="circle"></div>
    )
  }

  const OrganicBox =()=>{
    return(
    <div className="organic-box">
        <center><h1 className="orange-head">When health is organic</h1></center>
        <center><h1 className="green">Shop our Organic Products</h1></center>
        <div>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        </div>
        <div className="products-list"><center>
            <li className="products">Vegetables</li>
            <li className="products">Fruits</li>
            <li className="products">Fresh Nuts</li>
            <li className="products">Juices</li>
            <li className="products">Eggs</li>
            <li className="products">Healthy</li></center>
        </div>

    </div>
)
}

const FeaturedBox = () => {
    return (
      <div className="feature-box">
        <h1>Featured Products</h1>
        
      </div>
    )
  }
const Box=()=>{
    return(
        <div className="option-box">
        <FeaturedBox/>
        <div className="buttons">
        <div><button className="all-box">ALL</button></div>
        <div><button className="all-box">FRUITS</button></div>
        <div><button className="all-box">VEGETABLES</button></div>
        </div>
        </div>
    )
}

const AllProducts = () => {
    return(
            <div className="main-cards">
            <div className="top-box">
                <div><li className="kg">1Kg</li></div>
            </div>
            <hr></hr>
            <div className="bottom-box">
                <li className="items-list">Vegetables</li>
                <li className="items-list2">Fresh Organic Brokoli</li></div>
                <li className="price"> Actual Price <b> $20.00 </b></li>
        </div>    
    )
}

const MainContainer = () => {
    return (
      <div className="main-container">
      <AllProducts/>
      <AllProducts/>
      <AllProducts/>
      <AllProducts/>
      <AllProducts/>
      <AllProducts/>
      <AllProducts/>
      <AllProducts/>
      <AllProducts/>
      <AllProducts/>
      </div>

    )
}

const SearchBox = () => {
    return (
      <div className="search-box">
        <div>
        <div className="element1">Join Our Newsletter</div>
        <div className="element2">Get our emails for our new items,<br/>Sales and more products</div>
        <div className="element3">Vehiula odio sed pertium. Vivamus ut mauris eu libero sollicitudin<br/>pellentesque sodales commodo augue.</div>
        </div>
        <div className="mail-box">
          <div className="email">
            <input type="email" required placeholder="    Email Address"></input>
            <button className="email">Subscribe Now</button>
          </div>
        <div className="new-link"><li>Mauris sollicitudion odio.<a href="#">Curabitur euismod consequat elifend.</a></li></div>

        </div>
      </div>
    )
  }
  const Footer = () => {
    return(
      <footer className="footer">
      <div className="container">
        <div className="footer-left"> 
  
          <div className="logo">
            <h1>NAMM <br/>Organic</h1>
          </div>
          <li className="foot-para">Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor.</li>
        </div>
        <div className="footer-links">
          <h1 className="list">Useful Pages</h1>
          <ul className="ul-list">
            <li>About Us</li>
            <li>Contact</li>
            <li>Help Center</li>
            <li>Career</li>
            <li>Policy</li>
            <li>Flash Sale</li>
          </ul>
        </div>
        <div className="footer-links">
          <h1 className="list">Help Center</h1>
          <ul className="ul-list">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Checkout</li>
            <li>Other Issues</li>
          </ul>
        </div>
        <div className="footer-contacts">
          <h1 className="list">Contacts</h1>
          <ul className="ul-list">
          <li> W Street Name, New York,<br/> NY 10014</li>
          <li>(123) 456-78-90</li>
          <li>(123) 456-78-91</li>
          <li>sales@example.com</li>
          </ul>
        </div>
        <div className="footer-store-info">
          <h1 className="list">Store Information</h1>
          <ul className="ul-list">
            <li>Store Information</li>
            <li>About Store</li>
            <li>Bestsellers</li>
            <li>Latest Products</li>
            <li>New Discounts</li>
            <li>Sale Products</li>
          </ul>
        </div>
        <div className="footer-app-download">
          <h1 className="list">Download App</h1>
        </div>
      </div>
      <div className="footer-bottom">
      <hr className="hr"></hr>
        <ul className="last-lists"> 
          <span className="last">Home</span>|
          <span className="last">About Us</span>|
          <span className="last">Blog</span>|
          <span className="last">Shop</span>|
          <span className="last">Contact us</span>
        </ul>
        <hr></hr>
      </div>
      <div className="footer-copyright">
        <li>© 2022 Nammorganic Store. All Rights Reserved.</li>
        <div>
          <span><a href="#" className="terms">Terms and Conditions</a></span> | 
          <span><a href="#" className="terms">Privacy Policy</a></span>
          </div>
        
        
      </div>
    </footer>
    )
  }

export default function Page2() {
    return (
        <>
        <Card/>
        <Best/>
        <IntroBox/>
        <OrganicBox/>                    
        <Box/>
        <MainContainer/>
        <SearchBox/>
        <Footer/>
        </>
    )
}

