import { Container, Row, Col } from "react-bootstrap";
import DepartmentCard from "../component/DepartmentCard";
import { inventoryData } from "../dummyData/inventoryData";

export default function Departments() {
    const totalStock = inventoryData.reduce((acc, item) => acc + item.stock, 0);
    const totalDelivered = inventoryData.reduce((acc, item) => acc + item.delivered, 0);
    const lowStockThreshold = 10;

    const lowStockItemsCount = inventoryData.reduce((count, item) => {
        if (item.stock <= lowStockThreshold) {
            return count + 1;
        }
        return count;
    }, 0);
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