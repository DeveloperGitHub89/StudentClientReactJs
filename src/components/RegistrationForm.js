import { Component } from "react";
import { Alert, Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { saveStudent } from "../services/StudentApiService";

export class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            formData:{},
            modalOpeningStatus: false,
            defaultValues:{id:'',name:''}
        }
    }
   
    openDialog=()=>{
        this.setState({modalOpeningStatus:true});
    }
    closeDialog=()=>{
        this.setState({modalOpeningStatus:false});
    }
    handleChange = (event) => {
        this.setState(
            { 
                formData: {...this.state.formData,
                        [event.target.name]:event.target.value
                    } 
            }
        );
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await saveStudent(this.state.formData);
        console.log(response.data);
        if(response.status==200){
            this.setState({formData:{id:''}});
            this.openDialog();
        }
        
    }
    render() {
        return (
            <>
                <Container className="mt-4 text-center">
                    <Alert>Student registration form</Alert>
                </Container>
                <Container className="mt-4">
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Id</Form.Label>
                                    <Form.Control type="text" value={this.state.formData.id} placeholder="Enter id" name='id' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name='name' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone" name='phone' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Marks</Form.Label>
                                    <Form.Control type="text" placeholder="Enter marks" name='marks' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>
                            <Col lg={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={this.handleChange} />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Button type='submit' variant="success">Register Student</Button>
                    </Form>
                </Container>
                <Modal show={this.state.modalOpeningStatus} onHide={this.closeDialog}>
                    <Modal.Header closeButton>
                        <Modal.Title>Success</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Student registered!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.closeDialog}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}