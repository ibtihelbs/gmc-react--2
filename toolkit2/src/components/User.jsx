import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../store/userSlice";
import { useEffect } from "react";
const User = () => {
  const user = useSelector((item) => item.user);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
  }, []);
  console.log(user);

  return <div>User</div>;
};

export default User;
