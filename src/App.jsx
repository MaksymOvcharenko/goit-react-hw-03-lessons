import { useState } from "react";
import LangSwitcher from "./LangSwitcher";
import LoginForm from "./LoginForm";
import SearchBar from "./SearchBar";

const App = () => {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = (userData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };
  const [lang, setLang] = useState("uk");

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <LangSwitcher value={lang} onSelect={setLang} />
      <p>Мова: {lang}</p>
    </div>
  );
};
export default App;
