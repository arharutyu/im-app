import React from "react";
import { useState, useEffect } from "react";
import { get } from "../api/get.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const Questionnaire = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await get("/questions");
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Data Collection Questionnaire</h1>
      <Container>
        <Form>
          {questions.map((question, index) => (
            <>
              <Row id={index}>
                <Form.Group className="mb-3" controlId={index}>
                  <Col>
                    <Form.Label>{question.question}</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control type="input" />
                  </Col>
                </Form.Group>
              </Row>
            </>
          ))}
        </Form>
      </Container>
    </>
  );
};

export default Questionnaire;
