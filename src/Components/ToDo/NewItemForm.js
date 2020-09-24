import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const NewItemForm = (props) => {
    console.log('NewItemForm props:', props)
    return (
        <Form onSubmit={props.itemSubmitHandler}>
            <FormGroup>
                <Label for="newItem">New Item</Label>
                <Input
                    type='text'
                    name='newItem'
                    id='newItem'
                    onChange={props.itemNameInputHandler}
                    // value={props.pendingItemName}
                    placeholder='Add a New Item'
                    required
                />
            </FormGroup>
            <Button type="submit" color="primary" name="submit" value="submit">Add New Item +</Button>
        </Form>
    )
}

export default NewItemForm;