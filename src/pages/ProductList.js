import { Container, Row, Col, Table, Button } from "react-bootstrap";
import DepartmentCard from "../component/DepartmentCard";
import { inventoryData } from "../dummyData/inventoryData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductList() {
    const { department } = useParams()
    const uniqueDepartments = [...new Set(inventoryData.map(item => item.department))];
    const [products, setProducts] = useState()
    const filterProducts = (dept) => {
        if (dept === "All")
            setProducts(inventoryData)
        else {
            const temp = inventoryData.filter((data) => data.department === dept)
            setProducts(temp)
        }
    }

    useEffect(() => {
        if (department !== undefined) {
            filterProducts(department)
        } else {
            setProducts(inventoryData)
        }
    }, [])
    return (
        <Container fluid>
            <div className="d-flex mb-3">
                <span className="me-5"><h2>Products</h2></span>
                <select 
                name="department" 
                defaultValue={department}
                className="me-5" 
                onChange={(e) => { filterProducts(e.target.value) }}>
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
                    {products && products.length > 0 && products.map((data, index) => {
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