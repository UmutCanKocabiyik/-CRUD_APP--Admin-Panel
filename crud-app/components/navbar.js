import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href={"/"}>
        <div className={styles.navbar_logo}>CRUD</div>
      </Link>
      <div className={styles.navbar_links}>
        <Link href={"/"}>
          <button className={styles.navbar_links_btn}>See All</button>
        </Link>
        <Link href={"/employees/new"}>
          <button className={styles.navbar_links_btn}>Add New</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
