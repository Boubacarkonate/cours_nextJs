import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1>Liste des articles</h1>
      <ul className="m-2">
        <li><Link href="/articles/1">article 1</Link></li>
        <li><Link href="/articles/2">article 2</Link></li>
        <li><Link href="/articles/3">article 3</Link></li>
      </ul>
    </div>
  )
}

export default page
