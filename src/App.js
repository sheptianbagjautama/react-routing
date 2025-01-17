import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// //Old Way
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

//New Way
const router = createBrowserRouter([
  {
    //this absolute path
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      //without slash --> relative path , so this path depending to parent ,
      //example when navigate to relative path will become like this "/root/products" or /root/products/3"
      { index: true, element: <HomePage /> }, // path: ''
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
