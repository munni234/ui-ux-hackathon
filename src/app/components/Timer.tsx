// "use client"
// import React, { useState, useEffect } from "react";

// const Timer: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState<number>(() => {
//     // Load the saved timer from localStorage or generate a new one
//     const savedTime = localStorage.getItem("timer");
//     if (savedTime) {
//       return parseInt(savedTime, 10);
//     }
//     const randomTime = generateRandomTime();
//     localStorage.setItem("timer", randomTime.toString());
//     return randomTime;
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(interval);
//           localStorage.removeItem("timer");
//           return 0;
//         }
//         const updatedTime = prevTime - 1;
//         localStorage.setItem("timer", updatedTime.toString());
//         return updatedTime;
//       });
//     }, 1000);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, []);

//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   return (
//   <div className="flex justify-center items-center mt-12">
//       <div className="text-center p-8 rounded-lg shadow-lg bg-white">
//         <h1 className="text-2xl font-semibold text-gray-700 mb-4">Time taken for product to reach you</h1>
//         <p className="text-4xl font-mono text-blue-600">{formatTime(timeLeft)}</p>
       
//       </div>
//     </div>

// );
// };

// const generateRandomTime = (): number => {
//   // Generate a random time between 10 to 30 minutes (in seconds)
//   return Math.floor(Math.random() * (30 - 10 + 1) + 10) * 60;
// };

// export default Timer;
