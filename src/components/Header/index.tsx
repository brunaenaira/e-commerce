import SearchBar from "../SearchBar";
import './index.css';

export default function Header() {
  return (
    <header className="header">      <div className="container">
        <SearchBar/>
      </div>
    </header>
  );
}
