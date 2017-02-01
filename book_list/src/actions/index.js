export default function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with property called : 'type'.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
