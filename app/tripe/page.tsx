import Link from "next/link";

export default function Allthink() {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center ">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="./tripe/pages/links/Grid">Grid</Link>
        </li>
        <li>
          <Link href="./tripe/pages/links/Pipile">Pipiline</Link>
        </li>
        <li>
          <Link href="./tripe/pages/links/Register">Register</Link>
        </li>
      </ul>
    </div>
  );
}
