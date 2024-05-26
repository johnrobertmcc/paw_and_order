import Head from 'next/head';

export default function PageHeader({ children }) {
  return (
    <Head>
      <title>Paw & Order</title>
      <meta name="description" content="Legal Help Available" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/dark-mode.webp" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inclusive+Sans:ital@0;1&display=swap"
        rel="stylesheet"
      />

      {children}
    </Head>
  );
}
