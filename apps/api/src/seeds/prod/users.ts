import { prisma } from '@/bootstrap/db.init';
import { firebaseUserService } from '@/firebase/service/firebase.user.service';
import { Role } from '@/generated/prisma/enums';
import { faker } from '@faker-js/faker';

const prodUsers = [
  {
    email: 'tigana137@gmail.com',
    username: 'Tigana',
    password: 'SecureP@ssw0rd!',
    referenceCode: 'XXXXXX',
    role: Role.SUPER_ADMIN,
    points: 999999,
    provider: 'google.com',
    isEmailVerified: true,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    email: 'waiter@gmail.com',
    username: 'waiter',
    password: '12345678',
    referenceCode: '000000',
    role: Role.STAFF,
    points: 0,
    provider: 'google.com',
    isEmailVerified: false,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
  {
    email: 'user@gmail.com',
    username: 'user',
    password: '12345678',
    referenceCode: '101010',
    role: Role.USER,
    points: 0,
    provider: 'google.com',
    isEmailVerified: false,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  },
] as const;

export const seedProdUsers = async () => {
  prodUsers.forEach(async (user) => {
    const userExists = await prisma.user.findUnique({
      where: { email: user.email },
    });
    if (userExists) {
      return;
    }
    const userRecord = await firebaseUserService.createUser({
      email: user.email,
      displayName: user.username,
      password: user.password,
      role: user.role,
    });

    const data = {
      authId: userRecord.uid,
      email: user.email,
      username: user.username,
      referenceCode: user.referenceCode,
      role: user.role,
      points: user.points,
      provider: user.provider,
      isEmailVerified: user.isEmailVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
    await prisma.user.create({
      data,
    });
  });
};
