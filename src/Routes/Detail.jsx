import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const styles = {
  table: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "20px 0",
      backgroundColor: "#fff",
  },
  th: {
      border: "1px solid #ddd",
      padding: "12px",
      textAlign: "left",
      backgroundColor: "#4CAF50",
      color: "white",
  },
  td: {
      border: "1px solid #ddd",
      padding: "12px",
  },
  caption: {
      captionSide: "top",
      fontSize: "1.5em",
      fontWeight: "bold",
      marginBottom: "10px",
  },
  list: {
      margin: 0,
      padding: 0,
      listStyleType: "none",
  },
  subList: {
      margin: "5px 0 0 20px",
  },
};


const Detail = () => {
  
  const [dentist, setDentist] = useState({})
  const params = useParams()
  console.log(params)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => setDentist(data));
  }, [params.id]);
  console.log(dentist)
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table style={styles.table}>
            <caption style={styles.caption}>Dentist Information</caption>
            <thead>
                <tr>
                    <th style={styles.th}>Field</th>
                    <th style={styles.th}>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={styles.td}>ID</td>
                    <td style={styles.td}>{dentist.id}</td>
                </tr>
                <tr>
                    <td style={styles.td}>Name</td>
                    <td style={styles.td}>{dentist.name}</td>
                </tr>
                <tr>
                    <td style={styles.td}>Username</td>
                    <td style={styles.td}>{dentist.username}</td>
                </tr>
                <tr>
                    <td style={styles.td}>Email</td>
                    <td style={styles.td}>{dentist.email}</td>
                </tr>
                <tr>
                    <td style={styles.td}>Phone</td>
                    <td style={styles.td}>{dentist.phone}</td>
                </tr>
                <tr>
                    <td style={styles.td}>Website</td>
                    <td style={styles.td}>{dentist.website}</td>
                </tr>

            </tbody>
        </table>
    </>
  )
}

export default Detail

/* const dentist = { 
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
};
 */