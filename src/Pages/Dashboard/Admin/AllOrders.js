import React from "react";
import useAuth from "../../../hooks/useAuth";
import AllOrder from "./AllOrder";
export default function AllOrders() {
  const { user } = useAuth();
  const [filterEmail, setFilterEmail] = React.useState([]);

  const role = "completed";
  React.useEffect(() => {
    fetch(`http://localhost:5000/cart?email=${user.email}&role=${role}`)
      .then((res) => res.json())
      .then((data) => setFilterEmail(data));
  }, []);
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
