import Link from 'next/link'

export default function Home() {
  return (
    <div className='centerHome'>
      <h2>Home Page</h2>
      <Link href='/dashboard'>
         <button className='buttonHome'>Access Dashboard</button>
      </Link>
    </div>
  )
}
