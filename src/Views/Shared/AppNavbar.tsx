import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom"

export const AppNavbar: React.FC = () => {

    const navigate = useNavigate()

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container className={"mx-0"}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate('/surveys')}>Surveys</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
