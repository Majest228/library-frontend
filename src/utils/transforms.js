export const toBook = entry => ({
  id: entry.id,
  image: entry.image,
  name: entry.name,
  description: entry.author,
  rating: entry.rating,
  favorited: entry.favorited || false,
});

export const toAuthor = entry => ({
  id: entry.id,
  image: entry.image,
  name: entry.fullName,
  favorited: false,
});
