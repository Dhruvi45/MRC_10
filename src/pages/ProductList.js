import { Container, Row, Col, Table, Button } from "react-bootstrap";
import DepartmentCard from "../component/DepartmentCard";
import { inventoryData } from "../dummyData/inventoryData";
import { useState } from "react";

export default function ProductList() {
    const uniqueDepartments = [...new Set(inventoryData.map(item => item.department))];
    const [selectedDepartment, setSelectedDepartment] = useState()
    return (
        <Container fluid>
            <div className="d-flex mb-3">
                <span className="me-5"><h2>Products</h2></span>
                <select name="department" className="me-5" defaultValue={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)}>
                    <option value="All"> All Departments</option>
                    {uniqueDepartments.map((department, index) => {
                        return (
                            <option key={index} value={department}>{department}</option>
                        )
                    })}
                </select>
                <Button>Add new</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Prise</th>
                        <th>Stock</th>
                        <th>Supplier</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryData.map((data, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td><img src={data.imageUrl} alt={data.imageUrl} height={100} width={100} /></td>
                                <td>{data.name}</td>
                                <td>{data.description}</td>
                                <td>${data.price}</td>
                                <td>{data.stock}</td>
                                <td>{data.supplier}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}