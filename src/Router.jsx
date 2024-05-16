import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductCatalog from "./pages/ProductCatalog";
import DetailProduct from "./pages/DetailProduct";
import CheckoutProduct from "./pages/CheckoutProduct";
import Payment from "./pages/Payment";
import { Provider } from "react-redux";
import store from "./store";

const routerList = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <ProductCatalog />,
      },
      {
        path: "detail/:id/",
        element: <DetailProduct />,
      },
      {
        path: "checkout",
        element: <CheckoutProduct />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
    ],
  },
]);

const Router = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routerList} />
    </Provider>
  );
};

export default Router;
