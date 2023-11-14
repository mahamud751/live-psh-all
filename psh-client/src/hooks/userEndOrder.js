import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../contexts/UserProvider";

const userEndOrder = () => {
  const { user } = useContext(AuthContext);
  const {
    data: userOrder,
    isLoading,
    refetch,
  } = useQuery([user], () =>
    fetch(`http://localhost:5001/api/order/${user?.email}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  return [userOrder, refetch, isLoading];
};

export default userEndOrder;
