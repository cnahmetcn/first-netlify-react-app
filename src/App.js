import Content from "./components/Content";
import Header from "./components/Header";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <section className="todoApp">
        <Header />
        <Content />
      </section>
    </TodoProvider>
  );
}

export default App;
