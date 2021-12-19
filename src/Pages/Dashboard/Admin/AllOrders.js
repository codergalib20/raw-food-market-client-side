import React from "react";
import useAuth from "../../../hooks/useAuth";
import AllOrder from "./AllOrder";
export default function AllOrders() {
  const { user } = useAuth();
  const [filterEmail, setFilterEmail] = React.useState([]);

  const role = "completed";
  React.useEffect(() => {
    fetch(`https://fierce-meadow-56103.herokuapp.com/cart/orders?role=${role}`)
      .then((res) => res.json())
      .then((data) => setFilterEmail(data));
  }, [role]);
  return (
    <div>
      {filterEmail.map((item) => (
        <AllOrder
          key={item?._key}
          item={item}
          filterEmail={filterEmail}
          setFilterEmail={setFilterEmail}
        />
      ))}
    </div>
  );
}
