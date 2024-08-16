import ParticipantTable from "../../components/ParticipantTable/ParticipantTable.jsx";
import axios from "axios";
import { useEffect } from "react";
export default function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem("auth");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }, []);
  return <ParticipantTable />;
}
