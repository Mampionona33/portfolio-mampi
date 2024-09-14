const Introduction = () => {
  return (
    <section className="min-h-screen flex items-center" id="accueil">
      <div>
        <hr className="h-2 bg-neutral-900 dark:bg-neutral-100 rounded w-1/6 mb-6" />
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="text-3xl font-medium">
            Mampionona - Développeur Web Full Stack
          </h1>
          <p>
            {`Spécialisé dans la création d'applications complexes telles que les
            ERP et les SIRH, j'utilise des technologies comme React, Node.js,
            Laravel et MongoDB pour concevoir des solutions performantes et
            innovantes. Explorez mes projets dans ce portfolio.
            `}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Introduction;
