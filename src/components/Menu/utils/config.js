import Main from "../../../pages/Main/Main";
import About from "../../../pages/About/About";
import Blog from "../../../pages/Blog/Blog";
import Services from "../../../pages/Services/Services";
import Products from "../../../pages/Products/Products";
import Plans from "../../../pages/Plans/Plans";
import Portfolio from "../../../pages/Portfolio/Portfolio";
import Contacts from "../../../pages/Contacts/Contacts";
import Clients from "../../../pages/Clients/Clients";
import Team from "../../../pages/Team/Team";

export const ROUTES = [{ name: "Home", path: "/main", page : Main },
 { name: "About", path: "/about", page : About },
  { name: "Blog", path: "/blog", page : Blog},
   { name: "Services", path: "/services", page : Services },
    { name: "Products", path: "/products", page : Products }, 
    { name: "Plans", path: "/plans", page : Plans }, 
    { name: "Portfolio", path: "/portfolio", page : Portfolio }, 
    { name: "Contacts", path: "/contacts", page : Contacts },
     { name: "Clients", path: "/clients", page : Clients  },
     {name: "Team",path: "/team", page : Team}]

