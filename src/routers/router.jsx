import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import About from "../components/About";
import ClubLogo from "../components/ClubLogo";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ClubLogo />
            },
            {
                path: '/about',
                element: <About />
            }


        ]
        
    },
])

export default router