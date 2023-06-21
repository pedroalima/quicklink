import { useState, useEffect } from 'react';
import Header from './page/header/Header';
import Banner from './page/banner_section/Banner';
import Shortener from './page/shortener_section/Shortener';
import Amplify from './page/amplify_section/Amplify';
import Footer from './page/footer/footer';



function App() {

  const [typeDisplay, setTypeDisplay] = useState();
	const breakpoint = 999;

	useEffect(() => {
		window.innerWidth > breakpoint ? setTypeDisplay(true) : setTypeDisplay(false);

		window.addEventListener("resize", () => {
			window.innerWidth > breakpoint ? setTypeDisplay(true) : setTypeDisplay(false);
		});
	}, []);

  return (
    <div className='App'>
      <Header typeDisplay={typeDisplay} />
	<main>
		<Banner typeDisplay={typeDisplay} />
		<Shortener />
		<Amplify />
	</main>
	<Footer/>
    </div>
  )
}

export default App
