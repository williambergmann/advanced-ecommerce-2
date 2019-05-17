import React from "react";
import Header from "./components/Header"
import SubHeader from "./components/SubHeader"
import Footer from "./components/Footer"
import ImageSlider from "./components/ImageSlider"
import ProductDetail from "./components/ProductDetail"
import TopNav from "./components/TopNav"
import state from "./state"
import "./App.css";

function App(props) {
	console.log(state)
	const filtered = state.products.filter(product => {
		return product.category === props.currentCategory
	})
	console.log(filtered)

	return (
		<div className="App">
			<div className="wrap">
				<div className="header">
					<Header />
					<SubHeader />
					<TopNav changeCategory={props.changeCategory}/>
				</div>
				<ImageSlider />
				<div className="content">
					<div className="products-box">
						<div className="products">
							<h5><span>FEATURED</span> PRODUCTS</h5>
							<div className="section group">
								{
									filtered.map(featured => {
										return(
											<ProductDetail product={featured} />
										)
									})
								}
								{/* <ProductDetail img="images/g3.png" price="$512.00" />
								<ProductDetail img="images/g1.jpg" price="$300.00" />
								<ProductDetail img="images/g2.jpg" price="$120.00" />
								<ProductDetail img="images/g3.png" price="$500.00" />
								<ProductDetail img="images/g4.jpg" price="$120.00" /> */}
							</div>
						</div>

						{/* <div className="products products-secondbox">
							<h5><span>Our</span> Specials</h5>
							<div className="section group">
								<ProductDetail img="images/g1.jpg" sale="$600.00" price="$512.00" />
								<ProductDetail img="images/g6.jpg" sale="$400.00" price="$352.00" />
								<ProductDetail img="images/g7.png" sale="$300.00" price="$202.00" />
								<ProductDetail img="images/g8.png" sale="$400.00" price="$322.00" />
								<ProductDetail img="images/g1.jpg" sale="$700.00" price="$602.00" />
							</div>
						</div> */}
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;