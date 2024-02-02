import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Accommodation from "./pages/Accommodation";
import Propos from "./pages/Propos";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
//Importe :
//createBrowserRouter = créé navigation route
//RouterProvider = Fournisseur route
//Depuis react-router-dom


const router = createBrowserRouter([
  { 
    path: "*",
    element: <Home />,
  },
  {
		path: "/accommodation/:id",
		element: <Accommodation />
	},
  {
		path: "/propos",
		element: <Propos />
	}
]);
//4 routes pour 4 pages : Accueil, Hébergements, A propos, Error

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
/*On récupère les pages du DOM virtuel de React que l'on envoi
au DOM à l'identifiant "root" avec la méthode render*/
/*StrictMode est un outil pour détecter les problèmes potentiels d'une application, il 
n'affiche rien du tout. Il active des vérifications et avertissements supplémentaires
pour ses descendants.*/