// First Page
import { Box } from "@mui/material";
import "./globals.css";
  const Card = () => {
    return (
      <div className="card">
        <h1 className="hero">HERO SECTION</h1>
      </div>
    )
  }

  const Box1 = () => {
    return (
      <>
      <div className="box1">
        <li className="para1">Quality tests before<br/> our products reach your home.</li>
        <div className="rectangle">
        </div>
        </div>
        <li className="para2"><b>Purity you can trust and test!</b><br/>Raise a query and allow us to show you how to <br/>test the purity of milk!</li>
      </>
    )
  }

  const BestMango = () => {
    return(
      <>
      <div className="mango">Best Mango Categories</div>
      </>
    )
  }
  const Mango=()=>{
    return(
      <div>      
        <div className="mango1"></div>
      </div>
    )
  }

  const MangoContainer = () => {
    return(
      <div className="mango-container">
        <Mango/>
        <Mango/>
        <Mango/>  
        <Mango/>  
      </div>
    )
  }
  

  const Intro=()=>{
    return(
        <div className="intro">A Quick Introduction</div>
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

  const Instagram=()=>{
      return(
        <div className="insta">Instgram Feeds</div>
      )
  }
  const Feeds =()=>{
    return(
      <div className="feed"></div>
    )
  }

const InstagramFeed=()=>{
  return(
    <div className="insta-feed">
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
      <Feeds />
    </div>
  );
}

const Test =()=>{
  return(
    <div className="test">Testimonials</div>
  )
}
const TestBox=()=>{
  return(
  <div className="test-box">
    <Mango/>
    <Mango/>
    <Mango/>
    <Mango/>
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
        <span><a href="#" className="terms">Terms and Conditions</a></span> |
        <span><a href="#" className="terms">Privacy Policy</a></span>
    </div>
  </footer>
  )
}

export default function Home() {
  return (
    <>
    <Card/>
    <Box1/>
    <BestMango/>
    <MangoContainer/>
    <Intro/>
    <IntroBox/>
    <Instagram/>
    <InstagramFeed/>
    <Test/>
    <TestBox/>
    <Footer/>


    </>
  );
}
