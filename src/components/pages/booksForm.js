"use strict"

import React from 'react';
import { Well, FormControl, FormGroup, FormPanel, ControlLabel, Button, Panel } from  'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import { postBooks } from '../../actions/booksAction';

class BooksForm extends React.Component{
    
    //dispatch the action
    handleSubmit(){
      
        const book = [{
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value
        }];
        this.props.postBooks(book);
    }
    render(){
        return(
            <Well>
                <Panel>
                    <FormGroup controlId="title">
                        <ControlLabel>Title</ControlLabel>
                        <FormControl type="text" placeholder="Enter Title" ref="title" />
                    </FormGroup>
                    <FormGroup controlId="description">
                        <ControlLabel>Description</ControlLabel>
                        <FormControl type="text" placeholder="Enter Description" ref="description" />
                    </FormGroup>
                    <FormGroup controlId="price">
                        <ControlLabel>Price</ControlLabel>
                        <FormControl type="text" placeholder="Enter Price" ref="price" />
                    </FormGroup>      
                    <Button onClick={this.handleSubmit.bind(this)} bsStyle="primary" >Add Book</Button>
                </Panel>
            </Well>
        );
    }
}
function mapDispatchToProps(dispatch){
   
    return bindActionCreators({postBooks}, dispatch);
}
export default connect(null, mapDispatchToProps)(BooksForm);