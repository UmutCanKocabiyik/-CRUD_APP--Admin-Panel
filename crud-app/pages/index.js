import styles from "../styles/Home.module.css";
import EmployeeCard from '../components/EmployeeCard'

export default function Home({ employees }) {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        {employees &&
          employees.map((employee) => (
            <EmployeeCard key={employee._id} employees={employee} />
          ))}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/employees`);
  const data = await response.json();
  return {
    props: { employees: data },
  };
}
