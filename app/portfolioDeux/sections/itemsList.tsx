import Image from "next/image";
import Link from "next/link";

type ProjectListProps = {
  Id: number;
  Link: string;
  Image: string;
  Name: string;
  dateMois: string;
  dateDate: number;
};
const ProjectList: ProjectListProps[] = [
  {
    Id: 1,
    Image: "/avat.webp",
    Link: "mweziparteners.com",
    Name: "Mwezi parteners",
    dateMois: "Feb",
    dateDate: 19,
  },
  {
    Id: 2,
    Image: "/upload.png",
    Link: "book.com",
    Name: "Book",
    dateMois: "Feb",
    dateDate: 9,
  },
];
export function ItemsList() {
  return (
    <div className="min-w-0 flex-1">
      <HeaderProject />
      <ListProject />
    </div>
  );
}
const HeaderProject = () => {
  return (
    <div className="mb-8 flex items-center gap-1 flex-wrap">
      <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors bg-muted/50 text-foreground">
        All
      </button>
      <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground">
        <span className="h-2 w-2 rounded-full shrink-0 bg-primary"></span>
        Software Engineer
      </button>
    </div>
  );
};
const FlechVersDroite = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-muted-foreground transition-opacity duration-200 opacity-0 group-hover:opacity-100 absolute right-4">
      <path d="M7 7h10v10"></path>
      <path d="M7 17 17 7"></path>
    </svg>
  );
};
const ListProject = () => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between border-b border-dotted px-1 pb-2 text-sm text-muted-foreground">
        <span>Names</span>
        <span>Dates</span>
      </div>
      <ProjeListData />
    </div>
  );
};
const ProjeListData = () => {
  return (
    <div className="flex flex-col gap-0.5 -mx-3">
      {ProjectList.map((doc) => (
        <Link
          key={doc.Id}
          href={doc.Link}
          target="_blank"
          className="group relative flex items-center justify-between rounded-xl px-4 py-3 text-left transition-transform duration-200 hover:bg-muted/40 active:scale-[0.99]">
          <div className="flex flex-1 items-center gap-2 min-w-0 mr-4">
            <div className=" w-fit  overflow-hidden  ring-black/10 relative  rounded shadow-md shadow-black/6.5 ring-1 border-transparent  dark:ring-white/10 dark:border-black">
              <Image
                src={doc.Image}
                alt={doc.Name}
                width={"90"}
                height={"90"}
                className="size-5  object-cover "
              />
            </div>
            <span className="text-sm truncate">{doc.Name}</span>
            <span className="text-[13px] text-muted-foreground shrink-0">
              {doc.Link}
            </span>
          </div>
          <div className="flex items-center shrink-0">
            <span className="text-[13px] text-muted-foreground whitespace-nowrap transition-transform duration-200 group-hover:-translate-x-5">
              {doc.dateMois}
            </span>
            <span className="text-[13px] ml-1 text-muted-foreground whitespace-nowrap transition-transform duration-200 group-hover:-translate-x-5">
              {doc.dateDate}
            </span>

            <FlechVersDroite />
          </div>
        </Link>
      ))}
    </div>
  );
};
