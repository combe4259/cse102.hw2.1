import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>My name is Kim Junhyung</h1>
      <h2>Information of system 2021024348</h2>
      <h3>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h3>
    </>
  )
}