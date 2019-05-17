import React from "react";

function Footer() {
  return (
    <div className="footer">
        <div className="section group">
            <div className="col_1_of_4 span_1_of_4">
                <h3>INFORMATION</h3>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Sitemap</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                    <li><a href="#">Legal Notice</a></li>
                </ul>
            </div>
            <div className="col_1_of_4 span_1_of_4">
                <h3>OUR OFFERS</h3>
                <ul>
                    <li><a href="#">New products</a></li>
                    <li><a href="#">top sellers</a></li>
                    <li><a href="#">Specials</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Comments</a></li>
                </ul>
            </div>
            <div className="col_1_of_4 span_1_of_4">
                <h3>YOUR ACCOUNT</h3>
                <ul>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Personal info</a></li>
                    <li><a href="#">Prices</a></li>
                    <li><a href="#">Address</a></li>
                    <li><a href="#">Locations</a></li>
                </ul>
            </div>
            <div className="col_1_of_4 span_1_of_4 footer-lastgrid">
                <h3>Get in touch</h3>
                <ul>
                    <li><a href="#"><img src="images/facebook.png" title="facebook" /></a></li>
                    <li><a href="#"><img src="images/twitter.png" title="Twiiter" /></a></li>
                    <li><a href="#"><img src="images/rss.png" title="Rss" /></a></li>
                    <li><a href="#"><img src="images/gpluse.png" title="Google+" /></a></li>
                </ul>
                <p>Design by <a href="#">W3layouts</a></p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
