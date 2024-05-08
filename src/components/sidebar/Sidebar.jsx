import "./sidebar.scss"
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CategoryIcon from '@mui/icons-material/Category';

const Sidebar = () => {
  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <li>
        <DashboardIcon className="icon"/>
        <span>Dashboard</span>
      </li>
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
          <PersonIcon className="icon"/>
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products">
        <li>
          <ProductionQuantityLimitsIcon className="icon"/>
          <span>Products</span>
        </li>
      </Link>
      <li>
        <ShoppingBasketIcon className="icon"/>
        <span>Orders</span>
      </li>
      <Link to="/categories">
          <li>
           <CategoryIcon className='icon'></CategoryIcon>
            <span>Categories</span>
          </li>
        </Link>
      <p className="title">USER</p>
      <li>
        <AccountBoxIcon className="icon"/>
        <span>Profile</span>
      </li>
      <li>
        <ExitToAppIcon className="icon"/>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
</div>
  )
}

export default Sidebar