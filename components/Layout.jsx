import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <div>
          <Link href='/'>
            <a>🏡</a>
          </Link>
          <span>Welcome to my blog</span>{' '}
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div>
          Next.js MD
        </div>
      </footer>
    </div>
  );
}