import React from "react";
import { Menu, Layout } from "antd";
import { motion } from "framer-motion";
import "./TopNavbar.css";
import { Link, useNavigate } from "react-router-dom";

const { Header } = Layout;

const TopNavbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Header className="custom-navbar">
        <div className="logo" onClick={() => navigate('/')}>Deep Eigen AI Labs</div>
        <Menu theme="dark" mode="horizontal" className="nav-menu" style={{marginRight:"3px"}} selectable={false}>
          <Menu.Item key="1">
  <Link to="/courses">Courses</Link>
</Menu.Item>
          <Menu.Item key="2"><a href="#about">About</a></Menu.Item>
          {/* <Menu.Item key="3"><a href="#contact">Contact</a></Menu.Item> */}
        </Menu>
      </Header>
    </motion.div>
  );
};

export default TopNavbar;
