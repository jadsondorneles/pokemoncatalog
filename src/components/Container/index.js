import React from 'react'

import { Card, CardContent } from './styles'

export default function Container(props) {
    return (
        <Card style={props.style}>
            <CardContent id="cardcontent">
                {props.children}
            </CardContent>
        </Card>
    )
}