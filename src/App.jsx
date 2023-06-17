import { useState, useEffect } from 'react';
import './style/App.sass'
import Header from './page/header/Header'
import Banner from './page/banner_section/Banner';

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
	</main>
    </div>
  )
}

export default App
