import React from "react";
import ParagraphList from "./ParagraphList";

const App = () => {
  const exampleItems = [
    "Первый абзац",
    "Второй абзац",
    "Третий абзац",
    "Четвертый абзац",
    "Пятый абзац",
    "Шестой абзац",
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Список</h1>
      <ParagraphList items={exampleItems} perPage={2} />
    </div>
  );
};

export default App;
