import { useState } from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { getStudentsByNamePattern } from "../services/StudentApiService";

export function StudentsFilter() {

    const [hasUserTyped,setHasUserTyped]=useState(false);
    const [studentsList,setStudentsList]=useState([]);

    const handleChange=async(event)=>{
        setHasUserTyped(true);
        const response=await getStudentsByNamePattern(event.target.value);
        setStudentsList(response.data);
    }

    return (
        <>
            <Container className="mt-4 mb-4 text-center">
                <Alert>
                    Apply filter on the students by name
                </Alert>
            </Container>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={handleChange}></input>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-4 mb-4">
                {
                    hasUserTyped?<Table>
                    <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Marks</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentsList.map((student) => {
                                    return (
                                        <tr>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>+91-{student.phone}</td>
                                            <td>{student.marks}</td>
                                            <td>{student.email}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>:null
                }
                
            </Container>
        </>
    );
}