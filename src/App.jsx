import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Header } from './components/Header';
import { Home } from "./pages/Home";
import { Country } from "./pages/CountryInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>

            <Route index path="/" element={<Home />} />
            <Route path="/country/:code" element={<Country />} />

          </Routes>
        </main>
      </BrowserRouter>
    </>
  )

}
export default App
