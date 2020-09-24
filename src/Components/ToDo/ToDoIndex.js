import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
// import ToDoForm from './ToDoForm';
// import ToDoList from './ToDoList';
import NewItemForm from './NewItemForm';
import DisplayItems from './DisplayItems';

export default class ToDoIndex extends Component {
    constructor(props) {
        super(props);

        // instead of only array (my original approach, need to rebuild), array of object will allow for more values tied to each item in the list, such as task completed checkbox
        this.state = ({
            list:
                [
                    // {
                    //     itemName: 'strawberry',
                    //     // pendingItem: '',
                    //     itemComplete: false
                    // },
                ],
            // ...this.state.list
            // stores the item to add
            pendingItem: {
                pendingItemName: 'potato',
                itemComplete: false
            }
        });
    };

    // to-do item handler
    itemNameInputHandler = (e) => {
        console.log('I will handle item name input.')
        this.setState({
            pendingItem: {
                pendingItemName: e.target.value,
                itemComplete: false
            }

            // list: [
            //     {
            //         itemName: e.target.value,
            //         itemComplete: false
            //     }
            // ]
        })

        // this.setState({
        //     // pendingItem: e.target.value

        // });
    }

    // new to-do item handler
    itemSubmitHandler = (e) => {
        // console.log(this.state.list)
        console.log('executing itemSubmitHandler')
        e.preventDefault()
        console.log('I will submit data and update the content of the state storing the item list.')
        let a = this.state.list.slice()
        // .slice((this.state.list.length));
        // console.log(a)
        a.push({ itemName: this.state.pendingItem.pendingItemName, itemComplete: false })
        this.setState({ list: a })
        // console.log(this.state.list)

        // this.setState({
        //     list:
        //         [
        //             {
        //                 item: 'pushMe',
        //                 itemComplete: true
        //             }
        //         ]
        // })
        // console.log(this.state.list)

        // e.preventDefault();
        // this.setState({
        //     list: [
        //         {
        //             name: this.state.pendingItem,
        //         },
        //         ...this.state.list
        //     ],
        //     pendingItem: ''
        // })
    }

    // to-do mark item complete handler
    itemCompleteHandler = (itemIndex) => {
        console.log('I will mark the item as complete.')
        // this.setState

        // // remove item capability    
        // toDoItemRemoveHandler = (itemIndex) => {
        // console.log(this.state.list.itemIndex)
        // console.log(this.state.list.indexOf(itemIndex))
        // let newStateCopy = this.state.list
        // .filter(
        //     this.state.list.indexOf(eItemIndex)
        // )
        // console.log(newStateCopy)
        // let removeItem = this.state.list.indexOf(eItemIndex)
        // if (removeItem > -1) {
        //     newState.splice(removeItem, 1)

        // console.log(this.state.list)
        // const newState = this.state.list.filter(
        //     item => {
        //         this.state.list.indexOf(eItemIndex) !== index
        //     }

        // )
        // console.log('eItemIndex:', eItemIndex)
        // console.log('newState:', newState)
        // this.setState({
        //     list: newState
        // })
        // };
    }

    render() {
        return (
            <div>
                <h2>Hello from ToDoIndex</h2>

                <NewItemForm
                    itemNameInputHandler={this.itemNameInputHandler}
                    itemSubmitHandler={this.itemSubmitHandler}
                    value={this.state.pendingItem.pendingItemName}
                />
                <br />
                <DisplayItems list={this.state.list} itemCompleteHandler={this.itemCompleteHandler} />

                {/* <Form>
                    <FormGroup>
                        <Label for="newItem">New Item</Label>
                        <Input
                            type="text"
                            name="newItem"
                            id="newItem"
                            value={this.state.pendingItemName}
                            placeholder="New Item"
                            onChange={this.itemNameInputHandler}
                        />
                    </FormGroup>
                    <Button type="submit" name="submit" value="submit">Submit</Button>
                    <Button onClick={() => this.toDoItemSubmitHandler()}>Submit</Button>
                </Form> */}
                {/* <br /> */}
                {/* <div>{console.log('this.state.list.itemName:', this.state.list)}</div> */}
                {/* <Button onClick={() => console.log("this.state.list[0].itemName:", this.state.list[0].itemName)}>Console Log this.state.list[0].itemName</Button>
                <br />
                <br />
                <Button onClick={() => console.log("this.state.list[0].itemName:", this.state.list)}>Console Log this.state.list</Button> */}

                {/* <ToDoForm
                    className='input'
                    type='text'
                    toDoItemInputHandler={this.toDoItemInputHandler}
                    toDoItemSubmitHandler={this.toDoItemSubmitHandler}
                    value={this.state.pendingItem}
                    placeholder='Enter a to-do item'
                /> */}
                {/* <ToDoList
                    list={this.state.list}
                    toDoItemRemoveHandler={this.toDoItemRemoveHandler}
                // toDoItemRemoveHandler={this.toDoItemRemoveHandler}
                /> */}

                {/* <ToDoList list={this.state.list} toDoItemRemoveHandler={this.toDoItemRemoveHandler} */}
                {/* <Form className="toDoInput">
                    <FormGroup>
                        <Input
                            className="input"
                            // value={this.state.pendingItem}
                            onChange={this.state.toDoItemInputHandler}
                            type="text"
                            placeholder="Enter a to-do item"
                        />
                    </FormGroup>
                    <Button type="submit" name="submit" value="submit">Add To-Do List Item +</Button>
                </Form> */}
                {/* <div>{this.state.pendingItem}</div> */}
            </div>
        )
    }
}