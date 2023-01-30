import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
{
  path:"/",
  element:<span>HOME</span>
},
{
  path:"/products/:id",
  element:<span>CATEGORIES</span>
},
{
  path:"/product/:id",
  element:<span>PRODUCTS</span>
}
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
