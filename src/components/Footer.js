import { Link } from "react-router-dom";
import { githubLoader } from "../loaders";
function Footer(props){
    const navStyle = {
        display: "flex",
        justifyContent: "space-around",
        border: "3px solid black",
        padding: "8px",
        width: "90%",
        margin: "auto",
      };

    return (
    <footer>
    
    <nav style={navStyle}>
      <Link to="/github">
        <div>Github</div>
      </Link>
      
    
    </nav>
  </footer>
  );
}
export default Footer