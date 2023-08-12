import { Container, Row, Col } from "react-bootstrap";
import "../style/Sidebar.css"
import { useNavigate } from "react-router-dom";
export default function SideBar() {
    const navigate = useNavigate()
    return (
        <Container fluid>
            <div className="sidebar">
                <a className="active" onClick={() => navigate("/Dashboard")}>Dashboard</a>
                <a onClick={() => navigate("/Departments")} >Departments</a>
                <a onClick={() => navigate("/Products")}  >Products</a>
            </div>
        </Container>
    )
}