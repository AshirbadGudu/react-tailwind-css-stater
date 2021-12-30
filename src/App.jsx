import { LOGO } from "assets";

const App = () => {
  return (
    <div className="h-[100vh] bg-indigo-900 flex items-center justify-center">
      <div className="grid place-items-center">
        <img
          src={LOGO}
          alt="React Logo"
          className="h-60 w-60 transition hover:animate-spin cursor-pointer"
        />
        <h1 className="text-white text-5xl">React Tailwind Css Stater</h1>
      </div>
    </div>
  );
};

export default App;
