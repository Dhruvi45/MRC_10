import { Container, Row, Col } from "react-bootstrap";
import SideBar from "./SideBar"
import "../style/Layout.css"

export default function Layout(props) {
    return (
        <Container fluid >
            <Row >
                <Col xs lg={2}>
                    <SideBar />
                </Col>
                <Col xs lg={10}>
                    {props.children}
                </Col>
            </Row>


        </Container>
    )
}