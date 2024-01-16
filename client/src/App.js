import React from 'react'
import "./bootstrap.css"
import "./Style.css"
import { Route, Routes } from 'react-router-dom';
import SharedLayout from "./Components/Shared/SharedLayout"
import Home from './Components/Home/Home'
import Iphone from "./Components/Pages/Iphone/iphone";
import Mac from "./Components/Pages/Mac/Mac";
import Ipad from "./Components/Pages/Ipad/Ipad";
import Music from "./Components/Pages/Music/Music";
import Cart from "./Components/Pages/Cart/Cart";
import Support from "./Components/Pages/Support/Support";
import TV from "./Components/Pages/TV/TV";
import Watch from "./Components/Pages/Watch/Watch";
import Four04 from "./Components/Pages/Four04/Four04";
import Productpage from "./Components/Pages/Productpage/Productpage";
const App = () => {
  return (
	<div>
		<Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/iphone" element={<Iphone />} />
					<Route path="/ipad" element={<Ipad  />} />
					<Route path="/TV" element={< TV />} />
					<Route path="/Watch" element={<Watch />} />
					<Route path="/Music" element={<Music />} />
					<Route path="/Support" element={<Support />} />
					<Route path="/Cart" element={<Cart />} />
					<Route path="/mac" element={<Mac />} />
					<Route path="/iphone/:pid" element={<Productpage />} />
					<Route path="*" element={<Four04 />} />
          </Route>
        </Routes>
	</div>
  )
}

export default App;

