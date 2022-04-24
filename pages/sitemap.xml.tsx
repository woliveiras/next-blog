const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }: any) => {
    const BASE_URL = 'http://localhost:3000';

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      // our URL's will go here
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;