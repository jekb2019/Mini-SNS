import logo from './logo.svg';
import styles from './App.module.css';
import Header from './components/header/Header';
import Form from './components/form/Form';
import PostList from './components/postList/PostList';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Form />
      <PostList />
    </div>
  );
}

export default App;
