import Link from 'next/link';

const HomePage = () => {
  return (
    <>
    <h1>Navabar</h1>
    <ul>
      <li><Link href='/'>home</Link></li>
      <li><Link href='/about'>About</Link></li>
      
    </ul>

    </>
  )
}

export default HomePage;