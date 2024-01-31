import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", () => {
  <App />
});

it("matches snapshot", () => {
    const {asFragment} = render(<App/>);
    expect(asFragment()).toMatchSnapshot();
});