import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default  function useAuth (){
  const auth = useContext(AuthContext);
  return auth;
};

