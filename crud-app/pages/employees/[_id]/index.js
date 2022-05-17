import React from "react";
import styles from "../../../styles/Emp.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

function editEmp({ employees }) {
  const date = employees.employmentDate;
  const newDate = date.slice(0, 10);

  const router = useRouter();
  const id = router.query._id;
  const [formData, setFormData] = useState({
    name: employees.name,
    department: employees.department,
    position: employees.position,
    salary: employees.salary,
    employmentDate: newDate,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editEmployee(formData);
  };

  const editEmployee = async (formData) => {
    try {
      await fetch(`http://localhost:3000/api/employees/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async () => {
    try {
      await fetch(`http://localhost:3000/api/employees/${id}`, {
        method: "DELETE",
      });
      router.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.form_header}>Edit Employee</h1>
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
              value={formData.name}
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
              value={formData.department}
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
              value={formData.position}
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
              value={formData.employmentDate}
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
              value={formData.salary}
            />
          </div>
          <hr className={styles.hr} />
          <div className={styles.form_buttonContainer}>
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.form_btn}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={deleteEmployee}
              className={styles.form_btn_dlt}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export async function getServerSideProps({ query: { _id } }) {
  const response = await fetch(`http://localhost:3000/api/employees/${_id}`);
  const data = await response.json();
  return {
    props: { employees: data },
  };
}

export default editEmp;
