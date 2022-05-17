import React from "react";
import styles from "../../styles/New.module.css";
import { useState } from "react";
import {useRouter} from "next/router";

function newEmp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    position: "",
    salary: "",
    employmentDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(formData);
  };

  const createEmployee = async (formData) => {
    try {
      await fetch("http://localhost:3000/api/employees", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.form_header}>New Employee</h1>
          <hr className={styles.hr} />
          <div className={styles.from_inputContainer}>
            <label className={styles.form_label} htmlFor="name">
              Name
            </label>
            <input
              onChange={handleChange}
              className={styles.form_input}
              type="text"
              name="name"
              placeholder="Enter name here"
            />
            <label className={styles.form_label} htmlFor="department">
              Department
            </label>
            <input
              onChange={handleChange}
              className={styles.form_input}
              type="text"
              name="department"
              placeholder="Enter department here"
            />
            <label className={styles.form_label} htmlFor="position">
              Position
            </label>
            <input
              onChange={handleChange}
              className={styles.form_input}
              type="text"
              name="position"
              placeholder="Enter position here"
            />
            <label className={styles.form_label} htmlFor="employmentDate">
              Employment Date
            </label>
            <input
              onChange={handleChange}
              className={styles.form_input}
              type="date"
              name="employmentDate"
              placeholder="Enter employment date here"
            />
            <label className={styles.form_label} htmlFor="salary">
              Salary
            </label>
            <input
              onChange={handleChange}
              className={styles.form_input}
              type="string"
              name="salary"
              placeholder="Enter salary here"
            />
          </div>
          <hr className={styles.hr} />
          <button
            type="submit"
            onClick={handleSubmit}
            className={styles.form_btn}
          >
            Add New
          </button>
        </form>
      </div>
    </div>
  );
}

export default newEmp;
