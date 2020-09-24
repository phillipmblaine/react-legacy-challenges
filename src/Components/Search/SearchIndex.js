// need to import Component
import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
// import Search.js
// import Search from './Search'

// fix parentheses
// class component? remove '()'
class SearchIndex extends Component {
  // constructor
  constructor(props) {
    // super
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
    }
  }

  // componentDidMount() {

  // }

  searchFunction(searchString) {
    for (let i = 0; i < this.state.things.length; i++) {
      if (searchString !== '') {
        console.log('entered if', searchString)
        // console.log('if searchString:', searchString)
        let searchReturnArray = this.state.things.filter(searchReturnArray => searchReturnArray.includes(searchString))
        // console.log('searchReturnArray Value:', searchReturnArray)

        if (searchReturnArray.length === 0) {
          this.setState({
            things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
          })
        } else {
          this.setState({
            things: searchReturnArray
          })
          // console.log('filter includes test:', this.state.things.filter(arr => arr.includes(searchString)))
        }
      } else {
        console.log('entered else', searchString)
        // console.log('else searchString:', searchString)
        this.setState({
          things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
        })
      }
    }
  }

  // render needs a return inside
  render() {
    return (
      <div>
        <Label htmlFor="searchBar">Search Bar: </Label>
        <Input name="searchBar" placeholder='Search Here' required onChange={(e) => this.searchFunction((e.target.value).toLowerCase())} />
        <h3>Results:</h3>
        <h4>Things:</h4>

        <h6>{this.state.things.join(', ')}</h6>
      </div>
    )
  }
}

// add export default
export default SearchIndex;
