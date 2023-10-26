import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const MyClasses = () => {
  const { user, logOut, theme } = useContext(AuthContext);
  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {
    fetch(`https://cse-from-home-server.vercel.app/my-courses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCourses(data));
  }, [user?.email]);

  return <div>{myCourses?.length}</div>;
};

export default MyClasses;
