import { useState } from "react";
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
import { useStateContext } from "../Context";

const NavBar = () => {
  const [input, setInput] = useState("");
  const { setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };
  return (
    <Navbar className="bg-dark justify-content-between">
      <div className="container">
        <Form inline>
          <h1 className="title">Weather App</h1>
        </Form>
        <Form inline className="mx-5">
          <Row>
            <Col xs="auto">
              <Form.Control
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    // sumit the form
                    submitCity();
                  }
                }}
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Navbar>
  );
};

export default NavBar;
