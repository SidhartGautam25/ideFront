import styles from "./navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.st}>
        <Link className={styles.logo} href="/">
          <span>Compiler</span>
        </Link>
      </div>
      <div className={styles.login}>
        <span>signUP</span>
        <span>Login</span>
      </div>
    </div>
  );
}
