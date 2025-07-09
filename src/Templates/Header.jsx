import { Link } from "react-router-dom";

function Header() 
{

  return (
    <div>
        {/* <h2>Header</h2>        */}

        <Link to={'/'}>Home</Link> &nbsp;&nbsp;
        <Link to={'about'}> About </Link> &nbsp;&nbsp;
        <Link to={'contact'}> Contact </Link> &nbsp;&nbsp;
        <Link to={'login'}> Login </Link> <hr/>
    </div>
  )
}

export default Header;