import "./About.css";

//IMPORT IMAGES
import logo from "../../Imgs/LogosSVG/logo-color.png"

const About = () => {

    const logoIcon = logo
    return(
        <div className= "aboutContainer">
        {/* <div className="logo"><img src={logoIcon}/></div> */}
        <h1 className="titleAbout">What is FOODLAND?</h1>
        <p className="textAbout">
        
Welcome to FOODLAND, your trusted supermarket in the heart of the neighborhood! At FOODLAND we are proud to be much more than just a supermarket. We are a local business committed to providing fresh, quality and affordable products to our community. From the moment you walk through our doors, you are immersed in a welcoming atmosphere where we welcome you with a smile and offer you personalized service. <br></br>
Our passion for fresh and healthy foods drives us to carefully select each of the products that fill our shelves. From seasonal fruits and vegetables to the highest quality meat and fish, you will find everything you need for a balanced and delicious diet.<br></br>
 In addition, at FOODLAND we value being close to our customers and we strive to learn about their preferences and needs. Our friendly and attentive team is always ready to provide personalized advice and recommendations, so you can find exactly what you are looking for and more. We not only care about your satisfaction, but also about the well-being of our environment. <br></br>
 At FOODLAND we promote sustainable practices and collaborate with local suppliers to reduce our environmental footprint and support the local economy. Come discover the FOODLAND difference and join our family of satisfied customers. Whether you need to make a quick purchase, find fresh ingredients for a special recipe or just want to enjoy a cozy atmosphere, at FOODLAND you will find all that and much more. Thank you for choosing us as your neighborhood supermarket.<br></br> 
We hope to see you soon at FOODLAND, where quality and friendliness meet!
        </p>
      </div>
    )
};

export default About;
