import { Card } from "react-bootstrap"
import "../style/InventoryCard.css"

export default function InventoryCard(props) {
    const { text, value } = props
    return (<>
        <Card className="inventoryCard">


            <Card.Title className="title">{value}</Card.Title>
            <Card.Text className="text">
                {text}
            </Card.Text>
        </Card></>)
}