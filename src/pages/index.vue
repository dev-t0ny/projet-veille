<template>
  <main class="min-h-screen bg-gray-50 py-10 px-6 sm:px-10 lg:px-20">
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
  </main>
</template>
