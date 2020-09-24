import React, { Component } from 'react';
// button for the fetch call display
import { Button } from 'reactstrap';
// import Dogs from './Dogs';

// write class, export DogIndex, i will use class component and not functional (stateless) component to save the state
export default class DogIndex extends Component {
    // is this props needed?
    constructor(props) {
        super(props)
        // this.state to save api fetch
        this.state = {
            // dogFetchURL: 'https://random.dog/woof.json'
            dogFetchURL: 'https://dog.ceo/api/breeds/image/random',
            fetchButtonPresses: 0,
            dogFetchDisplayURL: ''
        }
    }

    componentDidMount() {

    }

    componentWillMount() {
        console.log('Executing componentWillMount.') // called before mount I believe?
    }

    // use a componentDidMount to ensure the fetch can complete before displaying, it also has a doggie pic ready to go, so can display a doggie pic if the conditional for displaying is changed
    // componentDidMount() {
    //     console.log('Executing componentDidMount:')
    //     fetch(this.state.dogFetchURL)
    //         .then(response => response.json())
    //         .then(json => this.setState({
    //             dogFetchDisplayURL: json.message
    //             // json => console.log(json)
    //         }))
    // }

    componentWillUnmount() {
        console.log('Executing componentWillUnmount.') // called before mount I believe?
    }

    dogFetchDisplayURLPicture() {
        this.setState({
            fetchButtonPresses: this.state.fetchButtonPresses + 1
        })
        console.log('fetchButtonPresses value:', this.state.fetchButtonPresses)
        fetch(this.state.dogFetchURL)
            .then(response => response.json())
            .then(json => this.setState({
                dogFetchDisplayURL: json.message
                // json => console.log(json)
            }))
            .catch((error) => {
                console.log('Problem with the fetch:', error)
            });
        // console.log('Hello from displayDogFetchUrlPicture.')
    }

    // displayDogFetchUrlPictureHandler() {
    //     this.displayDogFetchUrlPicture()
    // }

    // render, with return inside
    render() {
        return (
            <div>
                <h3>Hello from DogIndex</h3>
                <Button onClick={() => this.dogFetchDisplayURLPicture()}>Fetch Doggie Pics</Button>

                {
                    this.state.fetchButtonPresses === 0 && this.state.dogFetchDisplayURL === ''
                        ? (
                            < div >
                                <h6>Click the button for cute doggie pics!</h6>
                            </div>
                        )
                        : (
                            <div>
                                <h6>Click the button to show more doggie pics!</h6>
                                <img
                                    src={this.state.dogFetchDisplayURL}
                                    alt='dogFetchUrlPic'
                                />
                                {/* {console.log(this.state.dogFetchDisplayURL)} */}
                            </div>
                        )

                }
            </div>
        )
    }
}

// how to hide the intermediate state of the pic change?