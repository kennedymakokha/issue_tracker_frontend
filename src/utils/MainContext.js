import { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  //   useEffect(() => {
  //     const auth = getAuth();
  //     // console.log(user);

  //     onAuthStateChanged(auth, (user) => {
  //       setUser(user);

  //       setLoading(false);

  //       // console.log(user);
  //     });
  //   }, []);

  return (
    <Context.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
