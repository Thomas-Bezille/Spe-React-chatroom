/**
 * Fonction qui permet de trouver l'id max d'un tableau d'objet de de faire +1
 * @param arrayData => Tableau de messages
 * @returns int => Id max +1
 */
export const getNextId = (arrayData) => {
  if (arrayData === []) {
    return 1;
  }
  const ids = arrayData.map((data) => data.id);
  const maxId = Math.max(...ids);

  return maxId + 1;
};
