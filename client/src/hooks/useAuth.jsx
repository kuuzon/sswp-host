import { useContext, useDebugValue } from "react";
import AuthContext from "../contexts/AuthContext";

// Create useAuth HOOK to access AuthContext values [ACCESSES the WRAPPER]
const useAuth = () => {
  const { user } = useContext(AuthContext);

  // (i) & (ii) Test arguments
  // useDebugValue('Custom Label');
  // useDebugValue(user);

  // (iii) Debug Information on Logged In Status
  // useDebugValue(user?.id ? "Logged In" : "Logged Out");

  // (iv) Enhanced to ONLY call on inspecting DevTools
  useDebugValue(user, user => user?.id ? "Logged In" : "Logged Out");
  return useContext(AuthContext);
}

export default useAuth;