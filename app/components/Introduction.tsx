const Introduction = () => {
  return (
    <section className="min-h-screen pt-40" id="accueil">
      <hr className="h-2 bg-neutral-900 dark:bg-neutral-100 rounded w-1/6 mb-6" />
      <div className="flex flex-col gap-2 w-1/2">
        <h1 className="text-3xl font-medium">
          Je suis Mampionona, et je suis un Développeur
        </h1>
        <p>
          Développeur spécialisé dans la création d'applications complexes comme
          les ERP, j'utilise React, Node.js et Laravel pour concevoir des
          solutions robustes et innovantes. Découvrez mes projets dans ce
          portfolio.
        </p>
      </div>
    </section>
  );
};
export default Introduction;
