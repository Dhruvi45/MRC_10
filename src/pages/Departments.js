import { Container, Row, Col } from "react-bootstrap";
import DepartmentCard from "../component/DepartmentCard";
import { inventoryData } from "../dummyData/inventoryData";

export default function Departments() {
    const uniqueDepartments = [...new Set(inventoryData.map(item => item.department))];

    console.log("Unique Departments:", uniqueDepartments);
    return (
        <Container fluid>
            <Row xs={1} md={4}>
                {uniqueDepartments.map((department, index) => {
                    return (
                        <Col key={index}>
                            <DepartmentCard text={department} />
                        </Col>
                    )
                })}

            </Row>
        </Container>
    )
}