import { Header } from "./Components/Header";
import { Post } from "./Components/Post";
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
            author="Arthur Lima"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
