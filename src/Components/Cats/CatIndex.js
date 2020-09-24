import React, { Component } from 'react';
import CatList from './CatList';

// use export, extend component
export default class CatIndex extends Component {
  // breeds passed to CatIndex as props?

  constructor(props) {
    super(props)
    // this.state
    // change ' : ' to ' = '
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  // return needs a render
  render() {
    return (
      <div>
        <h3>Hello from CatIndex</h3>
        <CatList cats={this.state.breeds} />
      </div>
    )
  }
}

