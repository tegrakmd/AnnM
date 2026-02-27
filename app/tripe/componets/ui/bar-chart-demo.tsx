// "use client"

// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   Tooltip,
//   XAxis,
//   ResponsiveContainer,
// } from "recharts"
// import { barChartData } from "@/lib/chart-data"
// import { ChartTooltipContent } from "./chart-tooltip-content"

// export function BarChartDemo() {
//   return (
//     <div className="mt-6 h-40">
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={barChartData}>
//           <CartesianGrid
//             vertical={false}
//             strokeDasharray="3 3"
//             stroke="var(--color-border)"
//           />
//           <XAxis dataKey="name" hide />
//           <Tooltip content={<ChartTooltipContent />} />
//           <Bar
//             dataKey="mobile"
//             fill="var(--color-indigo-500)"
//             radius={[4, 4, 0, 0]}
//           />
//           <Bar
//             dataKey="desktop"
//             fill="var(--color-emerald-400)"
//             radius={[4, 4, 0, 0]}
//           />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }
