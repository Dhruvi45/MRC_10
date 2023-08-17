import { Card } from "react-bootstrap"
import "../style/DepartmentCard.css"
import { useNavigate } from "react-router-dom"

export default function DepartmentCard(props) {
    const { text } = props
    const navigate = useNavigate()
    return (<>
        <Card className="departmentCard p-3" onClick={()=> navigate(`/Products/${text}`)}>
            <Card.Title className="title">{text}</Card.Title>

        </Card></>)
}