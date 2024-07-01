import { Didact } from "./didact";

function App() {
  return Didact.createElement(
    "div",
    null,
    Didact.createElement("h1", null, "Hello World"),
    Didact.createElement(Counter),
  );
}

function Counter() {
  const [state, setState] = Didact.useState(1);
  return (
    Didact.createElement(
      "h1",
      { onClick: () => setState((c) => c + 1) },
      `Count: ${state}`,
    )
  );
}

const element = Didact.createElement(App);
const container = document.getElementById("root");
Didact.render(element, container);
