import { Card } from "@/components/ui/card";
import { WindowDots } from "./gantt-chart-demo";
// import Image from "next/image";
type Custo = {
  id: number;
  date: number;
  status: string;
  statusColor: string;
  customer: string;
  revenue: string;
};

const customers: Custo[] = [
  {
    id: 1,
    date: 10 / 31 / 2023,
    status: "Wait",
    statusColor: "bg-amber-500/10 text-amber-800",
    // statusColor: "bg-emerald-500/10 text-emerald-700",
    customer: "Gr Arnold",
    revenue: "$10",
  },
  {
    id: 2,
    date: 10 / 21 / 2023,
    status: "Wait",
    statusColor: "bg-amber-500/10 text-amber-800",
    // statusColor: "bg-emerald-500/10 text-emerald-700",
    customer: "Gr T-bag",
    revenue: "$10",
  },
  {
    id: 3,
    date: 10 / 15 / 2023,
    status: "Wait",
    statusColor: "bg-amber-500/10 text-amber-800",
    // statusColor: "bg-emerald-500/10 text-emerald-700",
    customer: "Gr Paris ",
    revenue: "$10",
  },
];

export function CustomersTableDemo() {
  return (
    <div className="mt-16" aria-hidden="false">
      <div className="relative">
        {/* Floating Customers Table */}
        <div className="z-1 hidden sm:block absolute -right-56 bottom-6 left-52 md:-right-4 md:w-[calc(100%-12rem)]">
          <div className="bg-illustration ring-border-illustration shadow-black/6.5 relative mx-auto max-w-full rounded-2xl border border-transparent p-6 shadow-md ring-1">
            <div className="mb-4">
              <h2 className="font-medium">Customers</h2>
              <p className="text-muted-foreground mt-0.5 line-clamp-1 text-sm">
                New users by First user primary channel group
              </p>
            </div>
            <table className="w-full table-auto border-collapse">
              <thead className="bg-foreground/5">
                <tr className="*:border *:p-3 *:text-left *:text-sm *:font-medium">
                  <th className="rounded-l-lg">#</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Personne</th>
                  <th className="rounded-r-lg">Montant</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {customers.map((row) => (
                  <tr key={row.id} className="*:border *:p-2">
                    <td className="font-mono">{row.id}</td>
                    <td className="font-mono">{row.date}</td>
                    <td>
                      <span
                        className={`rounded-full px-2 py-1 text-xs ${row.statusColor}`}>
                        {row.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        {/* <Image
                          src={`https://picsum.photos/seed/${row.customer}/20/20`}
                          className="size-5 rounded-full border border-foreground/10"
                          alt={row.customer}
                          sizes={40}
                          fill
                          referrerPolicy="no-referrer"
                        /> */}
                        <span className="text-foreground">{row.customer}</span>
                      </div>
                    </td>
                    <td className="font-mono">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Background Wireframe */}
        <Card className="mask-b-from-50% rounded-2xl border ">
          <div className="absolute inset-y-0 left-0 w-48 border-r">
            <div className="px-4 pt-4">
              <WindowDots />
            </div>
          </div>
          <div className="ml-auto w-[calc(100%-12rem)]">
            <div className="h-11 border-b" />
            <div className="relative  h-50 sm:h-80 ">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] opacity-50" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
