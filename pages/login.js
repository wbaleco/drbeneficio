import Head from "next/head";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const LoginPage = (props) => {
  return (
    <div>
      <div className="d-flex align-items-center flex-column p-2 text-center">
        <h2 className="text-muted lead">Login</h2>
        <form>
          <div>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Qual seu melhor email?"
                className="w-100 h-75 p-3"
              />
            </FormGroup>
          </div>
          <div></div>
        </form>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <nav>
            {/*    <ul className="footer-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul> */}
            <p className="copyright text-center">
              ©<script>document.write(new Date().getFullYear())</script>
              <a href="http://www.creative-tim.com">Walter Baleco</a>,
              Desenvolvido para Dr. Beneficio
            </p>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
