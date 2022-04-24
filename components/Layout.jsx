import Link from 'next/link';
import { config } from 'infra/config'

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <div>
          <Link href='/'>
            <a>{config.BLOG_TITLE}</a>
          </Link>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div>
          Blog desenvolvido com <a href="https://nextjs.org/" target='_blank' rel='noreferrer'>Next.js</a>
        </div>
      </footer>
    </div>
  );
}