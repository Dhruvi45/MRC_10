import { Container, Row, Col } from "react-bootstrap";
import InventoryCard from "../component/InventoryCard";
import { inventoryData } from "../dummyData/inventoryData";

export default function InventoryDashboard() {
    const totalStock = inventoryData.reduce((acc, item) => acc + item.stock, 0);
    const totalDelivered = inventoryData.reduce((acc, item) => acc + item.delivered, 0);
    const lowStockThreshold = 10;

    const lowStockItemsCount = inventoryData.reduce((count, item) => {
        if (item.stock <= lowStockThreshold) {
            return count + 1;
        }
        return count;
    }, 0);

    return (
        <Container fluid>
            <Row xs={1} md={4}>
                <Col>
                    <InventoryCard text={"Total stoke"} value={totalStock} />
                </Col>
                <Col>
                    <InventoryCard text={"Total Delivered"} value={totalDelivered} />
                </Col>
                <Col>
                    <InventoryCard text={"Low stock items"} value={lowStockItemsCount} />

                </Col>
            </Row>
        </Container>
    )
}