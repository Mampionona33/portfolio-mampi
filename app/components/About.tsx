const About = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 px-8"
      id="a_propos"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Première page */}
        <div className="flex-1 p-4 border-r border-neutral-300 dark:border-neutral-700">
          <h1 className="text-4xl font-bold mb-6 border-b-2 border-neutral-700 pb-2 dark:border-neutral-300">
            À propos de moi
          </h1>
          <p className=" leading-8 mb-6">
            Après avoir obtenu un diplôme en{" "}
            <span className="font-bold">Génie industriel</span> à l'Institut
            Supérieur de la Technologie d'Antananarivo, j'ai commencé ma
            carrière en tant qu'ingénieur d'étude en électricité chez Guilmann.
            Cependant, mon parcours a pris un tournant lorsque j'ai rejoint{" "}
            <span className="font-bold">Ingedata</span> en tant qu'outsourcer.
            C'est là que j'ai découvert le potentiel de l'automatisation pour
            simplifier certaines tâches.
          </p>
          <p className="text-lg leading-8 mb-6">
            Cette découverte m'a conduit à explorer le développement logiciel.
            J'ai commencé par créer des{" "}
            <span className="font-bold">scripts</span> via le DevTools de
            Chrome, puis j'ai développé des{" "}
            <span className="font-bold">extensions</span> pour améliorer
            l'interface utilisateur (UI) et l'expérience utilisateur (UX). C'est
            à ce moment-là que j'ai vraiment pris goût au développement.
          </p>
        </div>

        {/* Deuxième page */}
        <div className="flex-1 p-4">
          <p className=" leading-8 mb-6">
            Par la suite, j'ai développé une{" "}
            <span className="font-bold">
              application de suivi de tâches et de productivité
            </span>{" "}
            avec React, Node.js, GraphQL et MongoDB. J'ai également travaillé
            sur un projet majeur de{" "}
            <span className="font-bold">
              gestion de l'énergie des bâtiments
            </span>{" "}
            en utilisant React TypeScript et Node.js. Pour approfondir mes
            compétences, j'ai suivi une{" "}
            <span className="font-bold">
              formation de réorientation en développement logiciel
            </span>
            , où j'ai appris les{" "}
            <span className="font-bold">bases de la programmation</span>, les{" "}
            <span className="font-bold">algorithmes</span>, la{" "}
            <span className="font-bold">
              programmation procédurale et orientée objet
            </span>
            , les <span className="font-bold">design patterns</span>, ainsi que
            les <span className="font-bold">méthodologies agiles</span>.
          </p>
          <p className=" leading-8">
            Aujourd'hui, je poursuis une{" "}
            <span className="font-bold">Licence en informatique</span> au Centre
            National de Télé-Enseignement de Madagascar et je travaille en
            freelance sur divers projets, dont une{" "}
            <span className="font-bold">application de gestion de paie</span> et
            une{" "}
            <span className="font-bold">
              application de gestion de location de salles
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
