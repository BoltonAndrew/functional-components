import Child from "./Child.js";

function Parent() {
  return (
    <>
      <header>
        <h1>Functional Components</h1>
      </header>
      <main>
        <Child firstName="Andy" lastName="Bolton" age={19} petName="Link" />
        <Child firstName="Steve" lastName="Jobs" petName="Binary" />
        <Child petName="Toby" />
      </main>
    </>
  );
}

export default Parent;
