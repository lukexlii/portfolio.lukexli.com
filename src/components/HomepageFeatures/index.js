import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Passionate, since 6th grade',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Made my first app (desktop app for distributing campus newsletters digitally to replace the printed copies) in a VB course in 6th grade and have always been passionate about SWE since then.
      </>
    ),
  },
  {
    title: 'Excited to keep learning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        From Visual Basic to PHP to MERN stack and more; from immersing in a programming book borrowed from the library to fast, diverse online learning - excited about what's next!
      </>
    ),
  },
  {
    title: 'Motivated',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        My most enjoyable moments are to see my apps go into production and benefit real-world users. They motivate me to keep exploring, designing, and developing.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
