import { useState, useEffect } from 'react';
import './style/App.sass'
import Header from './page/header'

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
    </div>
  )
}

export default App
