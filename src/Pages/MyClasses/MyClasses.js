import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import MyClass from "./MyClass";

const MyClasses = () => {
  const { user, logOut, theme } = useContext(AuthContext);
  const [myClass, setMyClass] = useState([]);

  useEffect(() => {
    fetch(`https://cse-from-home-server.vercel.app/my-courses/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  }, [user?.email]);

  return (
  <div>
    {
        myClass?.map(course => <MyClass/>)
    }
  </div>
  );
};

export default MyClasses;
