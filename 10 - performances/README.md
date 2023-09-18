### Exercices JavaScript : Optimisation des Performances

Ce projet propose six exercices pour vous aider à maîtriser l'optimisation des performances en JavaScript. Les exercices portent sur l'amélioration du temps de chargement, la réduction de la consommation de mémoire et l'optimisation des boucles.

#### Exercice 1 : Chargement Asynchrone
**Objectif :** Utilisez le chargement asynchrone pour améliorer les performances.

1. Créez une page HTML simple avec une image.
2. Utilisez JavaScript pour charger cette image de manière asynchrone.
3. Mesurez le temps de chargement de la page et comparez-le à une version synchronisée.

#### Exercice 2 : Gestion de la Mémoire
**Objectif :** Optimisez la gestion de la mémoire dans votre code.

1. Écrivez un script JavaScript qui crée et supprime de nombreux objets ou éléments du DOM.
2. Utilisez les outils de développement de votre navigateur pour surveiller la consommation de mémoire.
3. Identifiez et corrigez les fuites de mémoire potentielles.

#### Exercice 3 : Utilisation de Caches
**Objectif :** Utilisez des caches pour stocker des données réutilisables.

1. Créez un script JavaScript qui récupère des données JSON à partir d'une source externe.
2. Stockez ces données dans un cache JavaScript pour éviter de les recharger inutilement.
3. Comparez les temps de chargement avec et sans cache.

#### Exercice 4 : Optimisation des Boucles
**Objectif :** Améliorez les performances des boucles dans votre code.

1. Écrivez un script JavaScript contenant une boucle de calcul intensif.
2. Utilisez des techniques d'optimisation telles que la réduction des appels de fonction.
3. Mesurez le temps d'exécution de la boucle avant et après les optimisations.

#### Exercice 5 : Utilisation de RequestAnimationFrame
**Objectif :** Utilisez la fonction `requestAnimationFrame` pour des animations optimisées.

1. Créez une animation simple en JavaScript à l'aide de `requestAnimationFrame`.
2. Mesurez et comparez les performances avec une animation basée sur `setInterval`.

#### Exercice 6 : Minimisation des Ré-Flows
**Objectif :** Réduisez le nombre de ré-évaluations du rendu (re-flows).

1. Créez une page HTML avec des éléments qui entraînent des re-flows fréquents (par exemple, redimensionnez des éléments).
2. Utilisez JavaScript pour minimiser les re-flows en effectuant des mises à jour en bloc.
3. Mesurez les améliorations de performances.

---

#### Annexe : Fonctions pour Mesurer et Afficher les Performances

```javascript
// Fonction pour mesurer le temps d'exécution d'une fonction
function measureExecutionTime(callback) {
  const start = performance.now();
  callback();
  const end = performance.now();
  console.log(`Temps d'exécution : ${end - start} millisecondes`);
}

// Fonction pour mesurer la mémoire utilisée
function measureMemoryUsage() {
  if (window.performance && window.performance.memory) {
    const memory = window.performance.memory;
    console.log(`Mémoire utilisée : ${memory.usedJSHeapSize / 1024 / 1024} Mo`);
  }
}
```


Ces exercices vous aideront à développer vos compétences en optimisation des performances en utilisant JavaScript. N'hésitez pas à les aborder dans l'ordre qui vous convient le mieux et à explorer les techniques d'optimisation. Amusez-vous bien !



