// "use client";

// import { Area, AreaChart, Tooltip, XAxis, ResponsiveContainer } from "recharts";
// import { areaChartData } from "@/lib/chart-data";
// import { ChartTooltipContent } from "./chart-tooltip-content";

// export function AreaChartDemo() {
//   return (
//     <div className="-mt-24 h-72" aria-hidden="true">
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart data={areaChartData}>
//           <defs>
//             <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
//               <stop
//                 offset="0%"
//                 stopColor="var(--color-emerald-500)"
//                 stopOpacity={0.8}
//               />
//               <stop
//                 offset="55%"
//                 stopColor="var(--color-emerald-500)"
//                 stopOpacity={0.1}
//               />
//             </linearGradient>
//             <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
//               <stop
//                 offset="0%"
//                 stopColor="var(--color-indigo-400)"
//                 stopOpacity={0.8}
//               />
//               <stop
//                 offset="55%"
//                 stopColor="var(--color-indigo-400)"
//                 stopOpacity={0.1}
//               />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="name" hide />
//           <Tooltip content={<ChartTooltipContent showLabel />} />
//           <Area
//             type="monotone"
//             dataKey="mobile"
//             stroke="var(--color-indigo-400)"
//             fill="url(#fillMobile)"
//             stackId="1"
//           />
//           <Area
//             type="monotone"
//             dataKey="desktop"
//             stroke="var(--color-emerald-500)"
//             fill="url(#fillDesktop)"
//             stackId="1"
//           />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }
