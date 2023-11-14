import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../contexts/UserProvider";

const usePromos = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    fetch(`https://psh-server.onrender.com/api/promo`)
      .then((res) => res.json())
      .then((data) => setPromos(data));
  }, []);
  return [promos];
};
export default usePromos;
