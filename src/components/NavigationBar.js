import { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Student App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to={'/'}>
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/register'}>
                                <Nav.Link>Register Student</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/students-list'}>
                                <Nav.Link>View All Students</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={'/students-filter'}>
                                <Nav.Link>Filter Students</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}