import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class Navbar1 extends Component {
    render() {
        return (
            <div><Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Money_Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">HOME</Nav.Link>
                            <Nav.Link href="#action2">HISTORY OF INCOME AND EXPENDITURE</Nav.Link>
                            <NavDropdown title="INCOME/EXPENDITURE" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Month wise income and expenditure</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                Weekly income and expenditure

                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                Yearly income and expenditure

                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Money_Manager
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>

                        <Button className='but'>+ADD INCOME/EXPENSES</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar></div>
        )
    }
}
