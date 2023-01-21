const App = () => {
  const name = "Sarah Smith";
  return <h1>Hello</h1>;
};

var element = <App />;

const Dapp = (props) => {
  const name = props.name;
  return <h1>Hello, {name}</h1>;
};
var element = <Dapp name="Sarah Smith" />;
