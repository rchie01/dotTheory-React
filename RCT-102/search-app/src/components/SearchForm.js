import React from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchForm = () => (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control type="email" placeholder="Search for something..." />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Search
      </Button>
    </Form>
)


export default SearchForm
