import Link from "next/link";
import { jobCategories } from "@/data/jobs";
import { Card } from "@/components/ui/card";

// export function EngeneerCat() {
//   return (
//     <section className=" py-16 md:py-32">
//       <div className="mx-auto max-w-5xl space-y-12 px-2">
//         <h2 className="  text-balance px-4 text-4xl ">All Positions</h2>
//         <div className="space-y-12">
//           {jobCategories.map((category) => (
//             <div key={category.category} className="space-y-3">
//               <h3 className=" px-4 text-sm capitalize">{category.category}</h3>

//               <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//                 {category.jobs.map((job) => (
//                   <div
//                     key={job.title}
//                     className=" bg-white/50 dark:bg-card ring-zinc-300 dark:ring-border shadow-black/2 hover:shadow-primary/7 dark:hover:shadow-primary/6.5 shadow-md hover:shadow-lg group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl p-6  ring-1">
//                     <div className="space-y-2">
//                       <h3 className="group-hover:text-primary text-lg font-medium  dark:text-white">
//                         <Link
//                           href={job.href}
//                           className="after:absolute after:inset-0">
//                           {job.title}
//                         </Link>
//                       </h3>
//                       <p className="text-zinc-600  dark:text-muted-foreground text-sm">
//                         {job.description}
//                       </p>
//                     </div>

//                     <div className="flex items-end justify-between">
//                       <div className="text-zinc-600  dark:text-muted-foreground  text-sm">
//                         <span>{job.location}</span>
//                         <span className="mx-2">·</span>
//                         <span className="capitalize">
//                           {job.type.replace("-", " ")}
//                         </span>
//                       </div>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="lucide lucide-arrow-up-right text-zinc-600  dark:text-muted-foreground  group-hover:text-indigo-400 size-4 transition-colors">
//                         <path d="M7 7h10v10" />
//                         <path d="M7 17 17 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
// import Link from "next/link";
// import { jobCategories } from "@/data/jobs";
// import { Card } from "@/components/ui/card";

export function EngeneerCat() {
  return (
    <section className=" py-16 md:py-32" id="engineer">
      <div className="mx-auto max-w-5xl space-y-12 px-2">
        <h2 className=" text-balance px-4 text-4xl ">All Positions</h2>
        <div className="space-y-12">
          {jobCategories.map((category) => (
            <div key={category.category} className="space-y-3">
              <h3 className=" dark:text-muted-foreground px-4 text-sm capitalize">
                {category.category}
              </h3>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {category.jobs.map((job) => (
                  <Card
                    key={job.title}
                    className="bg-card ring-border  shadow-black/2  hover:shadow-primary/7 dark:hover:shadow-primary/6.5 shadow-md hover:shadow-lg group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl p-6  transition ring-1">
                    <div className="space-y-2">
                      <h3 className="group-hover:text-indigo-400 text-lg font-medium ">
                        <Link
                          href={job.href}
                          className="after:absolute after:inset-0">
                          {job.title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex items-end justify-between">
                      <div className="text-muted-foreground  text-sm">
                        <span>{job.location}</span>
                        <span className="mx-2">·</span>
                        <span className="capitalize">
                          {job.type.replace("-", " ")}
                        </span>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-up-right text-muted-foreground  group-hover:text-indigo-400 size-4 transition-colors">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
