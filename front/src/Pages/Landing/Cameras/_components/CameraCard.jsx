import { Card } from 'antd'
import React from 'react'
import { source } from '../../../../methods'
import { Link } from 'react-router-dom';
const { Meta } = Card;

const CameraCard = ({ image = "", name = "", desc = "" , _id }) => {
    return (
        <Link to={`/cameras/${_id}`}>
            <Card
                hoverable
                style={{ width: "100%" , zIndex : "1" }}
                cover={<img alt={name} src={source(image)} />}
            >
                <Meta title={name} description={desc} />
            </Card>
        </Link>
    )
}

export default CameraCard