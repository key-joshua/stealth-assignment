import passwordHelper from '../../../v1/helpers/passwordHelper';

const userOne = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Josue',
  email: 'k.joshua855@gmail.com',
  password: passwordHelper.hashPassword('Qwerty@123'),
  isVerified: true,
};

const userTwo = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Abdel Fattah',
  email: 'abdel@gmail.com',
  password: passwordHelper.hashPassword('Qwerty@123'),
  isVerified: true,
};

const userThree = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'CHeren Eshe',
  email: 'cheren@gmail.com',
  password: passwordHelper.hashPassword('Qwerty@123'),
  isVerified: true,
};

const userFour = {
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Adebowale Monel',
  email: 'adebowale@gmail.com',
  password: passwordHelper.hashPassword('Qwerty@123'),
  isVerified: false,
};

const up = (queryInterface) => queryInterface.bulkInsert('Users', [userOne, userTwo, userThree, userFour]);
const down = (queryInterface) => queryInterface.bulkDelete('Users', null, {});
export { up, down };
