const Contact = () => {
  return (
    <section
      className="min-h-screen p-8 bg-neutral-100 dark:bg-neutral-900"
      id="contact"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Formulaire de Contact */}
        <div className="flex-1 p-4">
          <h1 className="text-4xl font-bold mb-6 border-b-2 border-neutral-700 pb-2 dark:border-neutral-300">
            Contactez-moi
          </h1>
          <form
            action="https://formspree.io/f/YOUR_FORM_ID" // Remplacez par l'URL de votre service de formulaire
            method="POST"
            className="flex flex-col gap-4"
          >
            <label htmlFor="name" className="font-bold">
              Nom
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              />
            </label>
            <label htmlFor="email" className="font-bold">
              E-mail
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              />
            </label>
            <label htmlFor="message" className="font-bold">
              Message
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full p-2 border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out dark:from-teal-600 dark:to-blue-700"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Informations de Contact Directes */}
        <div className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">Informations de Contact</h2>
          <p className="mb-4">
            <span className="font-bold">Email :</span>{" "}
            <a
              href="mailto:ramamps33@gmail.com"
              className="text-blue-500 dark:text-blue-300"
            >
              ramamps33@gmail.com
            </a>
          </p>
          <p className="mb-4">
            <span className="font-bold">Téléphone :</span> +261 34 74 444 96
          </p>
          <p className="mb-4">
            <span className="font-bold">Réseaux sociaux :</span>
            <ul className="list-disc ml-5 mt-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/tsanta-ramahazomanana-4a9508175/"
                  className="text-blue-500 dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mampionona33"
                  className="text-blue-500 dark:text-blue-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
