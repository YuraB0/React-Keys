import './App.css';

export default function App() {
  const categories = [
    "Animals",
    "Anime",
    "Anti-Malware",
    "Art Design",
    "Books",
    "Business",
    "Calendar",
    "Cloud Storage",
    "File Sharing",
    "Animals",
    "Continuous Integration",
    "Cryptocurrency",
  ];

  return (
    <div className="app-container">
      <h1 className="title">Categories List</h1>
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category} className="category-item">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
