export const stripHTML = (string) => {
  return string.replace('<p>', '').replace('</p>', '')
}