import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <center>Projeto acadêmico</center>,
    imageUrl: 'img/mochilaSmall.svg',
    description: (
      <>
        Projeto desenvolvido para centralizar conteúdos apresentados na pós graduação.
      </>
    ),
  },
  {
    title: <center>Matérias e professores</center>,
    imageUrl: 'img/documentSmall.svg',
    description: (
      <>
        Para saber mais informações, acesse a área dos <a href="docs/">conteúdos</a> ou a área dos <a href="professores/">professores</a>
      </>
    ),
  },
  {
    title: <center>Docusaurus: Powered by React</center>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        <a href="https://docusaurus.io/">Docusaurus</a>: Documentação feita de forma simples e rápida.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Projeto desenvolvido para centralizar conteúdos apresentados na pós graduação.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* Comentado o botão inicial, pode ser que depois utilizamos para algo */}
          {/* <div className={styles.buttons}>
            <Link
              className={styles.indexCtasGetStartedButton}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div> */}
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
