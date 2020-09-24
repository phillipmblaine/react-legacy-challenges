import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, FormGroup, Input, Label } from 'reactstrap'

const DisplayItems = (props) => {
    console.log('DisplayItems props:', props)
    console.log('DisplayItems props list:', props.list)
    return props.list.map((value, index) => {
        return (
            <div key={index}>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>
                            itemName: {props.list[index].itemName}
                        </ListGroupItemHeading>
                        <ListGroupItemHeading>
                            itemComplete: {props.list[index].itemComplete.toString()}
                            {console.log(props.list[index])}
                        </ListGroupItemHeading>
                    </ListGroupItem>
                    <ListGroupItem>
                        <FormGroup check>
                            <Label check>
                                {/* // needs a function that changes state of the itemComplete boolean when checkbox is clicked */}
                                <Input type="checkbox" onClick={() => props.itemCompleteHandler(props.list[index])}
                                />{' '}
                                Check me once complete!
                            </Label>
                        </FormGroup>
                    </ListGroupItem>
                </ListGroup>
                <br />
            </div>
        )
    })
}

export default DisplayItems;