import Navbar from "@/app/components/navbar/Navbar";
import styles from "./styles.module.css";
import CodeMirror from "@uiw/react-codemirror";
export default function index() {
  const code = "const a=0;";
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.textArea}>
          <CodeMirror
            value={code}
            height="645px"
            width="100%"
            options={{
              mode: "jsx",
            }}
          />
          <button>Submit</button>
        </div>
        <div className={styles.result}>
          <div className={styles.ans}>hello</div>
        </div>
      </div>
    </>
  );
}
