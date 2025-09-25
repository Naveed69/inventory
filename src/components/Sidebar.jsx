import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid, FiBox, FiClipboard, FiFileText, FiPlusSquare } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Kailash Kalamkari</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              <FiGrid />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeclassname="active">
              <FiBox />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders" activeclassname="active">
              <FiClipboard />
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/barcode" activeclassname="active">
              <FiFileText />
              <span>Barcode Generator</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-product" activeclassname="active">
              <FiPlusSquare />
              <span>Add Product</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
