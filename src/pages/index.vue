<template>
  <main class="min-h-screen bg-gray-200 py-10 px-6 sm:px-10 lg:px-20">
    <section
      class="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10"
    >
      <header class="mb-8">
        <h1 class="text-3xl font-semibold text-gray-900">
          Présentation du projet — TP2
        </h1>
        <p class="mt-1 text-sm text-gray-500">
          Section 1 — Analyse du projet : résumé, objectifs et contraintes
        </p>
      </header>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          Présentation du projet
        </h2>
        <p class="text-sm text-gray-700 leading-relaxed">
          Installation numérique (matérielle et logicielle) visant à améliorer
          le bien-être des étudiantes et étudiants du Cégep Garneau. Le
          dispositif doit encourager la présence physique au cégep, faciliter la
          création de liens sociaux et être accessible à un maximum
          d'utilisateurs tout en respectant la mission éducative de
          l'établissement.
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          Objectifs et visées
        </h2>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Favoriser l'habitation physique du cégep par les étudiants.</li>
          <li>
            Toucher un large public étudiant (inclusif, sans exclusion sociale).
          </li>
          <li>
            Faciliter les interactions et la création de liens entre pairs et
            personnels.
          </li>
        </ul>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          Contraintes (ce que le client ne veut pas)
        </h2>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>Ne pas nuire à la mission éducative du cégep.</li>
          <li>
            Ne pas contribuer à l'exode vers un univers exclusivement numérique.
          </li>
          <li>
            Ne pas exclure des groupes d'étudiants (accessibilité et inclusion
            requises).
          </li>
        </ul>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          Contraintes technologiques
        </h2>
        <ul class="list-decimal pl-5 text-sm text-gray-700 space-y-2">
          <li>
            <strong>Longévité :</strong> solutions matérielles robustes et
            faciles à maintenir, choix de composants ayant un cycle de vie
            raisonnable.
          </li>
          <li>
            <strong>Stabilité & efficacité :</strong> architecture logicielle
            simple, tests de charge et supervision minimale pour garantir un
            service stable.
          </li>
          <li>
            <strong>Maintenabilité :</strong> documentation claire, modularité
            logicielle, et accès pour le personnel technique du cégep.
          </li>
        </ul>
      </article>
      <div class="mt-8 text-center text-xs text-gray-500">
        <p>
          Informations tirées du cours 4:
          <a
            href="https://veilletechnogarno.gitlab.io/docs/cours/cours4.html"
            target="_blank"
            class="text-blue-600 hover:underline"
          >
            Veille techno: Cours 4
          </a>
        </p>
      </div>
    </section>

    <br />

    <section
      class="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10"
    >
      <header class="mb-8">
        <p class="mt-1 text-sm text-gray-500">
          Section 2 — Proposition : Table de jeu intéractive
        </p>
      </header>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          Table intéractive
        </h2>
        <p class="text-sm text-gray-700 leading-relaxed">
          Une table de jeu intéractive qui utilise des capteurs pour détecter la
          présence et les mouvements des utilisateurs, offrant ainsi une
          expérience ludique et engageante. Les utilisateurs peuvent interagir
          avec la table via un jeu de style <em>Tower Defense</em>, favorisant
          ainsi les interactions sociales et la collaboration au sein des
          étudiants.
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">Fonctionnement</h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          La table de jeu repose sur une surface interactive équipée de capteurs
          de proximité (infrarouge ou capacitif) et d'un projecteur intégré
          affichant le terrain de jeu. Lorsqu'un utilisateur pose un jeton ou
          pion sur la table, le système détecte sa position et traduit cette
          action en une commande dans le jeu (ex. : placer une tour, activer un
          pouvoir, lancer une vague ennemie).
          <br />
          Un microcontrôleur (comme un Raspberry Pi ou Arduino) gère la
          détection des entrées physiques et communique avec une application
          logicielle développée pour simuler le jeu Tower Defense en temps réel.
          L'affichage est projeté sur la table et mis à jour selon les
          interactions des joueurs.
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          Comment va-t-on répondre aux contraintes et défis?
        </h3>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>
            <strong>Accessibilité :</strong> surface plane, intuitive et sans
            périphérique externe requis. La table favorise la participation de
            tous les profils d'utilisateurs.
          </li>
          <li>
            <strong>Collaboration :</strong> le jeu est conçu pour encourager la
            coopération et la discussion entre joueurs, répondant ainsi à la
            mission sociale et éducative du projet.
          </li>
          <li>
            <strong>Stabilité et maintenabilité :</strong> architecture
            modulaire séparant le matériel (capteurs) et le logiciel (jeu
            projeté) afin de simplifier les mises à jour et les réparations.
          </li>
          <li>
            <strong>Longévité :</strong> utilisation de composants standards
            (capteurs, microcontrôleur Raspberry Pi, projecteur) faciles à
            remplacer et bien documentés.
          </li>
        </ul>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">Interactions</h3>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>
            <strong>Amorce :</strong> détection automatique de la présence d'un
            utilisateur par les capteurs, activant une animation d'accueil sur
            la table.
          </li>
          <li>
            <strong>Déroulement :</strong> les joueurs coopèrent pour placer des
            tours et défendre leur base contre des vagues d'ennemis. Chaque
            action est réalisée par un geste ou le placement d'un pion physique.
          </li>
          <li>
            <strong>Temps :</strong> une partie dure environ 5 à 10 minutes,
            favorisant des sessions courtes adaptées aux pauses des étudiants.
          </li>
        </ul>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          Schématisation matérielle prévue
        </h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          TODO: Schématisation matérielle
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          Schématisation logicielle prévue
        </h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          TODO: Schématisation logicielle
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          Justification des technologies
        </h3>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>
            <strong>Raspberry Pi :</strong> faible coût, bonne puissance de
            calcul et compatibilité avec les capteurs et les systèmes de
            projection.
          </li>
          <li>
            <strong>Capteurs infrarouges :</strong> haute sensibilité, détection
            fiable des mouvements et faible latence.
          </li>
          <li>
            <strong>Projecteur :</strong> permet un affichage direct sur la
            surface de jeu, sans écran externe.
          </li>
          <li>
            <strong>Logiciel en Python / Unity :</strong> outils adaptés pour le
            prototypage rapide d'interfaces interactives et la gestion en temps
            réel des événements du jeu.
          </li>
          <li>
            <strong>Architecture modulaire :</strong> séparation claire entre
            l'acquisition des données matérielles et la logique du jeu,
            facilitant la maintenance et les évolutions futures.
          </li>
        </ul>
      </article>
    </section>

    <br />

    <section
      class="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-10"
    >
      <header class="mb-8">
        <p class="mt-1 text-sm text-gray-500">
          Section 3 — Proposition : détection du traffic dans les classes
        </p>
      </header>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h2 class="text-lg font-medium text-gray-900 mb-3">
          Détection du traffic dans les classes
        </h2>
        <p class="text-sm text-gray-700 leading-relaxed">
          Système de détection du trafic dans les classes et espaces communs du
          4e étage du Pavillon G, visant à informer les étudiantes et étudiants
          sur l'achalandage en temps réel. Ce dispositif permettrait
          d'identifier les locaux disponibles pour étudier au calme ou, au
          contraire, les espaces plus fréquentés pour socialiser.
          <br />
          Le projet s'inscrit dans une démarche d'optimisation de l'utilisation
          des locaux, d'amélioration du confort et de promotion de la vie
          étudiante sur le campus.
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">Fonctionnement</h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          Le système repose sur un réseau de capteurs installés à l'entrée des
          classes. Ces capteurs détectent le passage des personnes à l'aide de
          technologies comme les capteurs infrarouges ou les ultrasons.
          <br />
          Les données sont transmises en temps réel à un microcontrôleur (par
          exemple un Raspberry Pi) qui les envoie à une application web
          centralisée. Celle-ci affiche sur une carte de l'étage le niveau
          d'achalandage de chaque local à l'aide d'un code de couleur (vert =
          calme, jaune = modéré, rouge = très fréquenté).
          <br />
          Les étudiants peuvent ainsi consulter en ligne ou sur un écran
          interactif les endroits où se rendre selon leurs besoins : étudier,
          travailler en équipe ou socialiser.
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          Comment va-t-on répondre aux contraintes et défis?
        </h3>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>
            <strong>Accessibilité :</strong> l'information sur l'achalandage
            sera affichée sur une interface simple, accessible à tous les
            étudiants via un site web ou une application mobile.
          </li>
          <li>
            <strong>Fiabilité :</strong> utilisation de capteurs calibrés et
            d'une architecture distribuée pour éviter les pertes de données.
          </li>
          <li>
            <strong>Maintenabilité :</strong> système modulaire composé de
            capteurs indépendants et d'un serveur central, facilitant les
            remplacements et mises à jour.
          </li>
          <li>
            <strong>Conformité à la mission éducative :</strong> encourage la
            présence au cégep et l'utilisation optimale des espaces
            d'apprentissage.
          </li>
        </ul>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">Interactions</h3>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>
            <strong>Amorce :</strong> détection automatique du passage d'une
            personne à l'entrée d'un local. Le système met à jour en temps réel
            le nombre de personnes présentes.
          </li>
          <li>
            <strong>Déroulement :</strong> les données sont envoyées vers une
            base de données, puis affichées sur une interface visuelle
            (application web ou mobile).
          </li>
          <li>
            <strong>Temps :</strong> la mise à jour est effectuée toutes les
            quelques secondes ou minutes afin de fournir une information à jour.
          </li>
        </ul>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          Schématisation matérielle prévue
        </h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          TODO: Schématisation matérielle
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          Schématisation logicielle prévue
        </h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          TODO: Schématisation logicielle
        </p>
      </article>

      <article class="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-6">
        <h3 class="text-lg font-medium text-gray-900 mb-3">
          Justification des technologies
        </h3>
        <ul class="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>
            <strong>Capteurs infrarouges ou ultrasons :</strong> détection
            fiable du passage et de la densité.
          </li>
          <li>
            <strong>Raspberry Pi :</strong> plateforme compacte et économique
            capable de collecter les données et de les transmettre au serveur.
          </li>
          <li>
            <strong>Réseau Wi-Fi :</strong> communication sans fil entre
            les capteurs et le serveur central pour une installation flexible.
          </li>
          <li>
            <strong>Base de données (PostgreSQL ou MongoDB) :</strong>
            stockage structuré des données de trafic avec possibilité d'analyse
            statistique.
          </li>
          <li>
            <strong>Interface web (HTML, Tailwind, Vue.js) :</strong>
            visualisation claire et intuitive du trafic par salle, accessible
            sur ordinateur ou mobile.
          </li>
        </ul>
      </article>
    </section>
  </main>
</template>
