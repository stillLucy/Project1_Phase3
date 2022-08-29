// IDB things
import { openDB } from 'idb';

window.addEventListener('DOMContentLoaded', async() => {
  // Set up Database.
  openDB('comment-store', 1, {
    upgrade(db) {
      // Creates 'comments' Object Store if it doesn't already exist.
      db.createObjectStore('comments', { autoIncrement: true });
      console.log('hi');
    },
  });

  // Get comments from database, and add to state (see ./store/state.js).
  const db = await openDB('comment-store', 1);
  const comments = ((await db.getAll('comments')) || {});
  for (let i = 0; i < comments.length; i++) {
    store.dispatch('addComment', comments[i]);
  }
  db.close();
});

const formElement = document.querySelector('.comment-form');

formElement.addEventListener('submit', async(evt) => {
  evt.preventDefault();


  let contents = commentElement.value.trim();
  if (contents.length) {
    let comment = {contents: contents }
    // Add comment to state.
    store.dispatch('addComment', comment);
    // Add comment to database.
    const db = await openDB('comment-store', 1)
    await db.put('comments', comment);
    db.close();
    // Prepare form to recieve another comment.
    commentElement.value = '';
    commentElement.focus();
  }
});

const commentInstance = new Comment();
commentInstance.render();
