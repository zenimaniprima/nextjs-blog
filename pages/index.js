import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { getRepos } from "../lib/repos";
import Link from 'next/link';
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const dataRepos = await getRepos();
  console.log(dataRepos);
  return {
    props: {
      allPostsData,
      dataRepos,
    },
  };
}

export default function Home({ allPostsData, dataRepos }) {
  const getAnimalsContent = param => {
    let content = [];
    let index = param.length - 1;
    for (let i = 0; i < 3; i++) {
      const item = param[index];
      content.push(
        <li className={utilStyles.listItem} key={item.id}>
          <Link href={item.html_url}>{item.name}</Link>
          <div className={utilStyles.lightText}>
            <Date dateString={item.created_at} />
          </div>
          <p className='text-sm'>
            {item.description}
          </p>
        </li>
      );
      index = index - i;
    }
    return content;
  };


  console.log(allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`text-center`}>
        <p>Hello there, i'm Zayn, i'm an software engineer and web developer</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <div className={'flex px-3'}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} mx-2`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, place }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <div className={utilStyles.lightText}>
                  <Date dateString={date} />
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} mx-2`}>
          <h2 className={utilStyles.headingLg}>Projects</h2>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem} >
              <Link href='https://github.com/SidnaZayn/deteksi-plat'>Indonesian Motorcycle Plate Detection</Link>
              <div className={utilStyles.lightText}>
                <Date dateString='2022-11-19T02:55:50Z' />
              </div>
              <p className='text-sm'>
                automatic motorcycle plate number recognition (Indonesia)
              </p>
            </li>
            <li className={utilStyles.listItem} >
              <Link href='https://github.com/SidnaZayn/SPK-MotorBekas'>SPK Motor Bekas</Link>
              <div className={utilStyles.lightText}>
                <Date dateString='2022-05-19T01:33:54Z' />
              </div>
              <p className='text-sm'>
              Aplikasi Sederhana Logika Fuzzy Tsukamto untuk Menentukan Kelayakan Motor Bekas yang dibangun dengan PHP Native dan Pendekatan Machine Learning
              </p>
            </li>
            <li className={utilStyles.listItem} >
              <Link href='https://github.com/SidnaZayn/kabarduka.com'>Kabarduka.com</Link>
              <div className={utilStyles.lightText}>
                <Date dateString='2022-01-27T06:17:35Z' />
              </div>
              <p className='text-sm'>
                Kabarduka.com was created for Internship Project at Nusantara Techno. this web is an one stop for every funreal needs. for your information, this page is included by 2 section, admin page and front page.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

