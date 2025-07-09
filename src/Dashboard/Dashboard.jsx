import { Link } from "react-router-dom";
import Profile from "./Profile";
import SideNav from "./SideNav";

function Dashboard() 
{
  
  return (
    <div>
        <h2>Dashboard</h2>

        <div style={{border:'solid 1px'}}>
          <Profile></Profile>
        </div>
        <br/>
        <div style={{border:'dashed 1px', width:'30%'}}>
          <SideNav></SideNav> 

          <Link to={'Add Employee'}></Link> 
        </div>      
    </div>

  )
}

export default Dashboard;