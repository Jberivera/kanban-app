export function findTask(element) {
  if (element.classList.contains('js-task-group')) {
    return null;
  }
  if (element.tagName === 'LI') {
    return element;
  }
  return findTask(element.parentNode);
}

export function findGroup(element) {
  if (element.classList.contains('js-task-group')) {
    return element.getAttribute('data-group');
  }
  return findGroup(element.parentNode);
}
