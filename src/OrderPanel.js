import { useState } from "react";
import { Card, Typography, CardContent } from "@mui/material";
import orderData from "./data/orders.json";
import "./App.css";

const OrderPanel = ({ idNumber }) => {
  const [orders, setOrders] = useState(orderData);

  return (
    <div className="order_panel">
      <Card variant="outlined">
        <CardContent className="card-two">
          {idNumber ? (
            <>
              <CardContent>
                <CardContent>
                  <Typography variant="h4">List of orders :</Typography>
                  <Typography className="order_data" variant="h5">
                    {orders[idNumber].order[0]}
                  </Typography>
                  <Typography className="order_data" variant="h5">
                    {orders[idNumber].order[1]}
                  </Typography>
                </CardContent>
              </CardContent>
            </>
          ) : (
            <CardContent>
              <Typography variant="h3">Pick a user profile</Typography>
            </CardContent>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderPanel;
