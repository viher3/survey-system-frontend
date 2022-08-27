import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom"
import {ROUTE_PATHS} from "../../../Config/Router/Routes";

export const AppNavbar: React.FC = () => {

    const navigate = useNavigate()

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container className={"mx-0"}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate(ROUTE_PATHS.DASHBOARD)}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate(ROUTE_PATHS.SURVEY_LIST)}>Surveys</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
