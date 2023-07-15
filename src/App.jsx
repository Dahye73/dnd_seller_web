import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainRootLayout from "./pages/MainRootLayout";
import StartPage from "./pages/StartPage";
import DeliveryPage from "./pages/DeliveryPage";
import OrderPage from "./pages/OrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import ProductPage from "./pages/ProductPage";
import RobotInfomationPage from "./pages/RobotInfomationPage";
import StaticsPage from "./pages/StaticsPage";
import StorePage from "./pages/StorePage";
import { useState } from "react";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  {
    path: "/main",
    element: <MainRootLayout />,
    children: [
      { index: true, element: <StartPage /> },
      { path: "delivery", element: <DeliveryPage /> },
      {
        path: "order",
        element: <OrderPage />,
      },
      { path: "detail", element: <OrderDetailPage /> },
      { path: "product", element: <ProductPage /> },
      { path: "robot", element: <RobotInfomationPage /> },
      { path: "statics", element: <StaticsPage /> },
      { path: "store", element: <StorePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
