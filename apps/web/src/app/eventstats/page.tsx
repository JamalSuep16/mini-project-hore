// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import { Button } from "@/components/ui/button"; // Gunakan shadcn/ui untuk UI yang lebih baik

// const API_BASE_URL = "http://localhost:8000/api/v1/stats"; // Ganti dengan URL backend kamu

// const EventStats: React.FC = () => {
//   const [range, setRange] = useState<"year" | "month" | "day">("month");
//   const [eventData, setEventData] = useState([]);
//   const [registrationData, setRegistrationData] = useState([]);
//   const [transactionData, setTransactionData] = useState([]);

//   useEffect(() => {
//     fetchStats("events", setEventData);
//     fetchStats("registrations", setRegistrationData);
//     fetchStats("transactions", setTransactionData);
//   }, [range]);

//   const fetchStats = async (type: string, setter: Function) => {
//     try {
//       const response = await axios.get(
//         `${API_BASE_URL}/stats/${type}?range=${range}`
//       );
//       setter(response.data);
//     } catch (error) {
//       console.error(`Error fetching ${type} stats:`, error);
//     }
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Statistik Acara</h2>

//       <div className="flex gap-2 mb-4">
//         <Button
//           onClick={() => setRange("year")}
//           variant={range === "year" ? "default" : "outline"}
//         >
//           Per Tahun
//         </Button>
//         <Button
//           onClick={() => setRange("month")}
//           variant={range === "month" ? "default" : "outline"}
//         >
//           Per Bulan
//         </Button>
//         <Button
//           onClick={() => setRange("day")}
//           variant={range === "day" ? "default" : "outline"}
//         >
//           Per Hari
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <StatsChart
//           title="Event Statistics"
//           data={eventData}
//           color="#8884d8"
//           dataKey="total_events"
//         />
//         <StatsChart
//           title="Registration Statistics"
//           data={registrationData}
//           color="#82ca9d"
//           dataKey="total_registrations"
//         />
//         <StatsChart
//           title="Transaction Statistics"
//           data={transactionData}
//           color="#ffc658"
//           dataKey="total_transactions"
//         />
//       </div>
//     </div>
//   );
// };

// const StatsChart: React.FC<{
//   title: string;
//   data: any[];
//   color: string;
//   dataKey: string;
// }> = ({ title, data, color, dataKey }) => {
//   return (
//     <div className="p-4 border rounded-lg shadow-sm">
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="time_range" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey={dataKey} stroke={color} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default EventStats;
