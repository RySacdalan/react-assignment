import {
  Container,
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./App.css";
import OrderPanel from "./OrderPanel";

function App() {
  const [users, setUsers] = useState([]);
  const [idNumber, setIdNumber] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => setUsers(data));
  }, []);

  const orderResult = (id) => {
    setIdNumber(id);
  };

  return (
    <div className="App">
      <Container maxWidth="lg" className="container">
        <div className="flex_in_two">
          {/* left side div */}
          <div className="container_details">
            {users.map((person) => {
              return (
                <Card variant="outlined" className="card-one">
                  <CardActionArea onClick={() => orderResult(person.id)}>
                    <CardMedia
                      className="card_robo"
                      image={`https://robohash.org/${person.id}`}
                    />
                  </CardActionArea>
                  <CardContent className="card-one-content">
                    <Typography className="card_robo_name">
                      <h4>{person.name}</h4>
                    </Typography>
                    <Typography className="card_robo_email">
                      {person.email}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* right side div */}
          <OrderPanel users={users} idNumber={idNumber} />
        </div>
      </Container>
    </div>
  );
}

export default App;
