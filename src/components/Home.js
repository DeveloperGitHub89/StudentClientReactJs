import { Alert, Container } from "react-bootstrap";

export function Home(){
    return (
        <Container className="text-center mt-5">
            <Alert variant="primary">
                Welcome to Student Management App.
            </Alert>
            <p>In this app you can perform CRUD operations in Student.</p>
        </Container>
    );
}