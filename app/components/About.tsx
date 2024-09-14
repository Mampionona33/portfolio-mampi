const About = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 p-8"
      id="a_propos"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Première page */}
        <div className="flex-1 p-4 border-r border-neutral-300 dark:border-neutral-700">
          <h1 className="text-4xl font-bold mb-6 border-b-2 border-neutral-700 pb-2 dark:border-neutral-300">
            À propos de moi
          </h1>
          <p className="leading-8 mb-6">
            Passionné par l'innovation technologique et l'automatisation, j'ai
            commencé mon parcours professionnel avec un diplôme en{" "}
            <span className="font-bold">Génie industriel</span> de l'Institut
            Supérieur de la Technologie d'Antananarivo. Mon intérêt pour les
            nouvelles technologies m'a conduit à évoluer vers le développement
            logiciel.
          </p>
          <p className="leading-8 mb-6">
            Mon aventure dans le développement a débuté lors de mon expérience
            chez <span className="font-bold">Ingedata</span>, où j'ai découvert
            le potentiel de l'automatisation. J'ai commencé par créer des{" "}
            <span className="font-bold">scripts</span> via le DevTools de Chrome
            et développé des <span className="font-bold">extensions</span> pour
            améliorer l'UI/UX, ce qui a marqué le début de ma passion pour le
            développement.
          </p>
          <p className="leading-8 mb-6">
            Par la suite, j'ai conçu une{" "}
            <span className="font-bold">
              application de suivi de tâches et de productivité
            </span>{" "}
            utilisant React, Node.js, GraphQL et MongoDB. J'ai également eu
            l'opportunité de travailler sur un projet majeur de{" "}
            <span className="font-bold">
              gestion de l'énergie des bâtiments
            </span>{" "}
            en utilisant React TypeScript et Node.js pour un client en full
            remote.
          </p>
        </div>

        {/* Deuxième page */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Formation</h2>
          <p className="leading-8 mb-6">
            Pour renforcer mes compétences, j'ai suivi une{" "}
            <span className="font-bold">
              formation de réorientation en développement logiciel
            </span>
            , où j'ai acquis des connaissances approfondies sur les{" "}
            <span className="font-bold">bases de la programmation</span>, les{" "}
            <span className="font-bold">algorithmes</span>, ainsi que la{" "}
            <span className="font-bold">
              programmation procédurale et orientée objet
            </span>
            . J'ai également étudié les{" "}
            <span className="font-bold">design patterns</span> et les{" "}
            <span className="font-bold">méthodologies agiles</span>.
          </p>
          <p className="leading-8 mb-6">
            Suite à cette formation, j'ai travaillé sur un projet de{" "}
            <span className="font-bold">gestion de paie</span> avec React et
            Laravel. Actuellement, je développe une{" "}
            <span className="font-bold">
              application de gestion de location de salles
            </span>{" "}
            avec React et Laravel.
          </p>
          <p className="leading-8">
            En parallèle, je poursuis une{" "}
            <span className="font-bold">Licence en informatique</span> au Centre
            National de Télé-Enseignement de Madagascar, ce qui me permet de
            continuer à explorer de nouvelles opportunités professionnelles, que
            ce soit en <span className="font-bold">freelance</span> ou en{" "}
            <span className="font-bold">CDI</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
