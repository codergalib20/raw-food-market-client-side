import React from "react";
import useAuth from "../../../hooks/useAuth";
import CartItem from "./CartItem";
export default function AddToCart() {
  const { user } = useAuth();
  const [filterEmail, setFilterEmail] = React.useState([]);

  const role = "cart";
  React.useEffect(() => {
    fetch(`http://localhost:5000/cart?email=${user.email}&role=${role}`)
      .then((res) => res.json())
      .then((data) => setFilterEmail(data));
  }, [user.email]);
  console.log(filterEmail);
  return (
    <div>
      {filterEmail.map((item) => (
        <CartItem
          key={item?._key}
          item={item}
          filterEmail={filterEmail}
          setFilterEmail={setFilterEmail}
        />
      ))}
    </div>
  );
}
