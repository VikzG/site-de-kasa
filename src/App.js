import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Logements from "./pages/Logements";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/logements/:id",
		element: <Logements />
	},
	{
		path: '/about',
		element: <AboutPage />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;

