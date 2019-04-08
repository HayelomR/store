import React, { Component } from "react";
import Title from "./Title";
import { ProductConsumer } from "../context";
export default class Store extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />

                </React.Fragment>
              );
            } 
          }}
        </ProductConsumer>
      </section>
    );
  }
}