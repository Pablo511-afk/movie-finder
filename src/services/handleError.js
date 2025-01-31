export function handleError(httmlFormData) {
  const formData = new FormData(httmlFormData);
  const { name } = Object.fromEntries(formData);
  if (/[^a-zA-Z0-9 ]/.test(name)) {
    const errorLetters = name.match(/[^a-zA-Z0-9 ]/g);
    return { error: 'No existen peliculas con: ' + errorLetters.toString() };
  }
  return { error: '' };
}
