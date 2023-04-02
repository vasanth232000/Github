import "./app.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home"
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/Footer"
import Products from "./pages/Products/Products"
import Product from "./pages/Product/Product"

const Layout = () => {
  return(<div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{
      path:"/",
      element:<Home/>
    },
    {
      path:"Products/:id",
      element:<Products/>
    },
  {
      path:"Product/:id",
      element:<Product/>
    }]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
