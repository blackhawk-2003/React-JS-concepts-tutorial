import { useEffect, useState } from "react";

const Users = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data?.users) {
        setUser(data?.users);
        setLoading(false);
      } else {
        setUser([]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //call the api from a a function
  const handleFetch = () => {
    setHasFetched(true);
    fetchAllUsers();
  };

  //   useEffect(() => {
  //     fetchAllUsers();
  //   }, []);

  console.log(user);
  if (loading) {
    return <h2>Fetching users please wait!!</h2>;
  }

  let userListContent = null;
  if (user && user.length > 0) {
    userListContent = user.map((userItem) => (
      <li key={userItem.id}>
        <p>
          {userItem.id} - {userItem.firstName} {userItem.lastName}
        </p>
      </li>
    ));
  } else if (hasFetched) {
    userListContent = <h1>No user Found</h1>;
  }

  return (
    <div>
      <h2>All Users List</h2>
      <button onClick={handleFetch}>Fetch user</button>

      <ul>{userListContent}</ul>
    </div>
  );
};

export default Users;
