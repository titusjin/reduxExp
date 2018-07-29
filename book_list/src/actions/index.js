<<<<<<< HEAD
export default function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with property called : 'type' which idicates the propose of the action.
  
  return {
    type: 'BOOK_SELECTED',
=======
export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "BOOK_SELECTED",
>>>>>>> upstream/master
    payload: book
  };
}
