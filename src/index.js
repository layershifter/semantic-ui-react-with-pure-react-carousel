import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, Message, Segment } from "semantic-ui-react";

// Heads up!
// Don't forget to setyp required CSS!
import "pure-react-carousel/dist/react-carousel.es.css";

import CardCarousel from "./examples/CardCarousel";
import ImageCarousel from "./examples/ImageCarousel";

function App() {
  return (
    <Container style={{ margin: 20 }}>
      <Header as="h1" dividing>
        Carousels with Semantic UI React
      </Header>
      <Message info>
        Semantic UI React does not provide any carousel component. In this
        prototype we want to show how you can implement your own carousel with
        SUIR and{" "}
        <a
          href="https://www.npmjs.com/package/pure-react-carousel"
          target="_blank"
        >
          <code>pure-react-carousel</code>
        </a>
        .
      </Message>

      <Segment attached="top">
        <Header as="h2" content="Card carousel" />
        <p>
          This prototype features how to create a carousel with the{" "}
          <code>Card</code> component, take a look into{" "}
          <code>examples/CardCarousel</code> to get more details.
        </p>
      </Segment>
      <Segment attached="bottom">
        <CardCarousel />
      </Segment>

      <Segment attached="top">
        <Header as="h2" content="Image carousel" />
        <p>
          This prototype features how to create a carousel with images, take a
          look into <code>examples/ImageCarousel</code> to get more details.
        </p>
      </Segment>
      <Segment attached="bottom">
        <ImageCarousel />
      </Segment>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
