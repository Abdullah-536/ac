
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Home } from "./components/UI/Home/Home";

import { HandleError } from "./components/HandleError";
import {SamsungSeries} from "./pages/Samsung"
import { Apple } from "./pages/Apple";
import { Huawei } from "./pages/Huawei";
import { CardDetails } from "./pages/CardDetails";
import { getCardDetails} from "./pages/GetCardDetails";
import { CartPage } from "./components/UI/CartPage/CartPage";


function App() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/samsung-a-series",
          element: <SamsungSeries apiEndpoint="/api/samsung_A_Series.json" />,
          errorElement: <HandleError /> 
        },
        {
          path: "/samsung-s-series",
          element: <SamsungSeries apiEndpoint="/api/samsung_S_Series.json" />,
          errorElement: <HandleError />
        },
        {
          path: "/apple",
          element: <Apple appleApi="/api/apple.json"/>,
          errorElement: <HandleError /> // ✅ Add error handling
        },
        {
          path:"/huawei",
          element:<Huawei huaweiApi="/api/huawei.json"/>,
          errorElement:<HandleError/>
        },
        {
          path: "/:category/:id", // Include category and id in the URL
          element: <CardDetails />,
          loader: getCardDetails,
          errorElement: <HandleError />,
        },
        {
          path:"/add-to-cart",
          element:<CartPage/>,
          errorElement: <HandleError />,
          
        }
        
          
        
      ]
    }
]);



  return <RouterProvider router ={router} />
  
}

export default App
