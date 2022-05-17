import React from "react";
import styles from "./EmployeeCard.module.css";
import Link from "next/link";

function EmployeeCard({ employees }) {
  //SLICING DATE TO NORMAL STRING
  const date = employees.employmentDate;
  const newDate = date.slice(0, 10);

  return (
    <div className={styles.card_container}>
      <div className={styles.card_header}>{employees.name}</div>
      <hr className={styles.hr} />
      <div className={styles.card_body}>
        <div className={styles.card_body_left}>
          <span className={styles.card_body_span}>department</span>
          <span className={styles.card_body_span}>position</span>
          <span className={styles.card_body_span}>Employment Date</span>
          <span className={styles.card_body_span}>Salary</span>
        </div>
        <div className={styles.card_body_right}>
          <span className={styles.card_body_span}>{employees.department}</span>
          <span className={styles.card_body_span}>{employees.position}</span>
          <span className={styles.card_body_span}>{newDate}</span>
          <span className={styles.card_body_span}>{employees.salary} $</span>
        </div>
      </div>
      <hr className={styles.hr} />
      <div className={styles.card_button_container}>
        <Link href={`/employees/${employees._id}`}>
          <button className={styles.card_btn}>Info</button>
        </Link>
      </div>
    </div>
  );
}

export default EmployeeCard;
