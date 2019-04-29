import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

const Sprite = ({
  name,
  number,
  sprite
}: {
  name: string;
  number: string;
  sprite: string;
}) => {
  return (
    <Col md="12" lg="4">
      <Row className="text-center" style={{ marginBottom: "20px" }}>
        <Col>
          <div className="d-flex justify-content-between align-items-end">
            <span
              style={{ paddingBottom: "5px", borderBottom: "1px solid white" }}
              className="display-1 text-white"
            >
              {name}
            </span>
            <span className="display-3">#{number}</span>
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <img style={{ maxHeight: "360px" }} src={sprite} alt={name} />
        </Col>
      </Row>
    </Col>
  );
};

const mapStateToProps = (state: any) => {
  const { pokemon, selectedForm } = state.pokemon;

  return {
    name: pokemon[selectedForm].name,
    number: pokemon[selectedForm].number,
    sprite: pokemon[selectedForm].sprite
  };
};

export default connect(mapStateToProps)(Sprite);