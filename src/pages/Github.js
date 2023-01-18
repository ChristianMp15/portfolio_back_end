import { useLoaderData } from "react-router-dom";
import "../App.css"

function Github(props) {

  const github = useLoaderData()

  return <div>
      <a href={github.link}/>
     
        </div>
}
      
    

export default Github;