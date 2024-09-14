const Projects = () => {
  return (
    <section
      className="min-h-screen bg-neutral-100 dark:bg-neutral-900 p-8"
      id="projects"
    >
      <h1 className="text-4xl font-bold mb-6 border-b-2 border-neutral-700 pb-2 dark:border-neutral-300">
        Mes Projets
      </h1>
      <div className="flex flex-col gap-8">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Application de Suivi de Productivité
          </h2>
          <p className="mb-4">
            Développée avec <span className="font-bold">React</span>,{" "}
            <span className="font-bold">Node.js</span>,{" "}
            <span className="font-bold">GraphQL</span> et{" "}
            <span className="font-bold">MongoDB</span>, cette application aide
            les utilisateurs à suivre leur productivité et à gérer leurs tâches
            efficacement.
          </p>
          <a
            href="/projets/suivi-productivite"
            className="text-blue-500 underline"
          >
            En savoir plus
          </a>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Gestion de l'Énergie des Bâtiments
          </h2>
          <p className="mb-4">
            Projet réalisé en{" "}
            <span className="font-bold">React TypeScript</span> et{" "}
            <span className="font-bold">Node.js</span>, pour un client en full
            remote. Ce système permet une gestion optimisée de l'énergie dans
            les bâtiments.
          </p>
          <a
            href="/projets/gestion-energie"
            className="text-blue-500 underline"
          >
            En savoir plus
          </a>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Gestion de Paie</h2>
          <p className="mb-4">
            Développé avec <span className="font-bold">React</span> et{" "}
            <span className="font-bold">Laravel</span>, ce projet simplifie la
            gestion des salaires et des paiements dans les entreprises.
          </p>
          <a href="/projets/gestion-paie" className="text-blue-500 underline">
            En savoir plus
          </a>
        </div>

        <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            Gestion de Location de Salles
          </h2>
          <p className="mb-4">
            Actuellement en cours de développement avec{" "}
            <span className="font-bold">React</span> et{" "}
            <span className="font-bold">Laravel</span>, ce projet facilite la
            gestion des réservations et de l'utilisation des salles.
          </p>
          <a
            href="/projets/gestion-location"
            className="text-blue-500 underline"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
