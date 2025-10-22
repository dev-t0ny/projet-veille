<template>
  <div class="flex flex-col text-white-400 bg-gray-800 text-white">
    <header class="shadow-sm">
      <nav
        class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"
      >
        <h1 class="text-xl font-semibold">Projet Veille</h1>
        <ul class="flex space-x-6 text-sm font-medium">
          <li>
            <RouterLink to="/" class="hover:text-white-600 transition"
              >Accueil</RouterLink
            >
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="text-center py-4 text-xs text-gray-500 border-t">
      Projet réalisé dans le cadre du cours de Veille Technologique - Antoine
      Boudreau, Samuel Dussault-Gagnon, Gabriel Gingras, Fabio Mora Gonzalez
    </footer>
  </div>
</template>
