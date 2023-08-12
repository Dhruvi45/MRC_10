import { Card } from "react-bootstrap"
import "../style/DepartmentCard.css"

export default function DepartmentCard(props) {
    const { text } = props
    return (<>
        <Card className="departmentCard p-3">
            <Card.Title className="title">{text}</Card.Title>

        </Card></>)
}