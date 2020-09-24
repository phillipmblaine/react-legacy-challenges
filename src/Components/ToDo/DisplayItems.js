import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, FormGroup, Input, Label, Button } from 'reactstrap'

const DisplayItems = (props) => {
    console.log('DisplayItems props:', props)
    // console.log('DisplayItems props list:', props.list)
    return props.list.map((value, itemIndex) => {
        return (
            <div key={itemIndex}>
                <ListGroup>
                    <ListGroupItem color="info">
                        <ListGroupItemHeading>
                            itemName: {props.list[itemIndex].itemName}
                        </ListGroupItemHeading>
                        <ListGroupItemHeading>
                            itemComplete: {props.list[itemIndex].itemComplete.toString()}
                            {/* {console.log(props.list[itemIndex])} */}
                        </ListGroupItemHeading>
                    </ListGroupItem>
                    <ListGroupItem color="success">
                        <FormGroup check>
                            <Label check>
                                {/* // needs a function that changes state of the itemComplete boolean when checkbox is clicked */}
                                <Input type="checkbox" onClick={() => props.itemCompleteHandler(itemIndex)}
                                />{' '}
                                Check me once complete! (Or, uncheck if changing back to incomplete)
                            </Label>
                        </FormGroup>
                        <br />
                        <Button color="danger" onClick={() => props.itemDeleteHandler(itemIndex)}>Delete</Button>
                    </ListGroupItem>
                </ListGroup>
                <br />
            </div>
        )
    })
}

export default DisplayItems;