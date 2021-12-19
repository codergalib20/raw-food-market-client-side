import React from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "./MyOrder.js";
export default function MyOrders() {
  const { user } = useAuth();
  const [filterEmail, setFilterEmail] = React.useState([]);

  const role = "completed";
  React.useEffect(() => {
    fetch(`https://fierce-meadow-56103.herokuapp.com/cart?email=${user.email}&role=${role}`)
      .then((res) => res.json())
      .then((data) => setFilterEmail(data));
  }, [user.email, role]);
  return (
    <div>
      {filterEmail.map((item) => (
        <MyOrder
          key={item?._key}
          item={item}
          filterEmail={filterEmail}
          setFilterEmail={setFilterEmail}
        />
      ))}
    </div>
  );
}
