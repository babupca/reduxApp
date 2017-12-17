"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../../actions/booksAction';
import BookItem from './bookItem';
import BooksForm from './booksForm';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class BooksList extends React.Component{
    componentDidMount(){          
        this.props.getBooks();
    }

    render(){
       
        const BooksList = this.props.books.map(function(booksArr){
           
                return(
                    <Col xs={12} sm={6} md={4} key={booksArr.id}>
                        <BookItem
                            id={booksArr.id}
                            title={booksArr.title} 
                            description={booksArr.description} 
                            price={booksArr.price}                           
                        />
                    </Col>
                )
        });
       
        return(
            <Grid style={{ marginTop:'15px'}}>
                <Row>
                    <Col xs={12} sm={6}>
                        <BooksForm />
                    </Col>
                    {BooksList}
                </Row>
            </Grid> 
        )
    }

}
function mapStateToProps(state){
   
    return{
        books: state.books.books
    }
}
function mapDispatchToProps(dispatch){
   
    return bindActionCreators({getBooks:getBooks}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(BooksList); 