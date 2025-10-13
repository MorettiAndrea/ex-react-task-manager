import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-light py-4 mb-4">
      <div className="container text-center">
        <h1 className="mb-0">Gestione Task</h1>
      </div>
      <Navbar />
    </header>
  );
}
