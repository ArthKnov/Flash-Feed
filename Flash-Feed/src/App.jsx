import { Header } from "./Components/Header";
import { Post } from "./Post";
import { Sidebar } from "./Components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

          <Sidebar />
        
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam"
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}

export default App;
