const start = Date.now();
const initialWords = Array(4000).fill({ book: 'CET6', english: 'apple' });
const seenIds = new Set();
const allWords = [];
initialWords.filter(w => w.book === 'CET6').forEach(w => {
  const docId = `${w.book}_${w.english.replace(/\W/g, '')}`;
  if (!seenIds.has(docId)) {
    seenIds.add(docId);
    allWords.push({ id: docId, ...w });
  }
});
console.log('Time:', Date.now() - start);
