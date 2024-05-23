import Link from "next/link";
import styles from "./page.module.scss";
import classNames from "classnames";

export default function NotFound() {
  return (
    <main className={classNames(styles.main, styles.notFound)}>
      <h2>Oppsie!!!</h2>
      <Link href={"/"}>Back to Home.</Link>
    </main>
  );
}
