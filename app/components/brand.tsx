import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Thermal Wall Technology home">
      <b>TWT</b>
      <span>
        THERMAL WALL<small>TECHNOLOGY</small>
      </span>
    </Link>
  );
}
