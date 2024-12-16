import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar color="primary" dark expand="md" className="p-3">
      <div className="container-fluid">
        <NavbarBrand tag={Link} to="/">
          Danzas Bolivianas
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100 d-flex justify-content-around" navbar>
            <CustomNavLink to="/" label="Inicio" />
            <CustomNavLink to="/services" label="Servicios" />

            {/* Submenú para Productos */}
            <NavItem>
              <Dropdown
                nav
                inNavbar
                isOpen={dropdownOpen}
                toggle={toggleDropdown}
              >
                <DropdownToggle nav caret className="text-white">
                  Productos
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/products/diablada">
                    Diablada
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/products/caporal">
                    Caporales
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/products/morenada">
                    Morenada
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>

            <CustomNavLink to="/about" label="Acerca" />
            <CustomNavLink to="/contact" label="Contacto" />
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

const styles = {
  navLink: {
    transition: "all 0.3s ease",
    boxShadow: "none",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  navLinkHover: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra suave
    transform: "translateY(-2px)", // Efecto sutil de elevación
  },
};

const CustomNavLink = ({ to, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavItem>
      <NavLink
        tag={Link}
        to={to}
        className="text-white"
        style={{
          ...styles.navLink,
          ...(isHovered ? styles.navLinkHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {label}
      </NavLink>
    </NavItem>
  );
};

export default CustomNavbar;
