import { LOGO } from "assets";

const App = () => {
  return (
    <main className="page-container">
      <section className="grid place-items-center">
        <img src={LOGO} alt="React Logo" className="logo-style" />
        <h1 className="title">React Tailwind Css Stater</h1>
      </section>
    </main>
  );
};

export default App;
