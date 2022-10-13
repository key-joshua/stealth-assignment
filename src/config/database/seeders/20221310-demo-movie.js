const movieOne = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Extraction',
  userId: 1,
  rating: 4.3,
  cast: [`Chris Hemsworth · Tyler Rake`, `Bryon Lerum · Rake's Son`, `Ryder Lerum · Rake's Son`, `Rudhraksh Jaiswal · Ovi Mahajan`, `Shivam Vichare · Sachin`],
  releaseDate: new Date('2020-04-24')
};

const up = (queryInterface) => queryInterface.bulkInsert('Movies', [movieOne]);
const down = (queryInterface) => queryInterface.bulkDelete('Movies', null, {});
export { up, down };
