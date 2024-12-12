import db from '../config/connection.js';
import { Thoughts, User } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomName, getRandomThought } from './data.js';

try {
    await db();
    await cleanDB();

const userThoughts = [];

for (let i = 0; i < 20; i++) {
    const randomThought = getRandomThought(1)[0];
        const fullName = getRandomName();
        const [first, last] = fullName.split(' '); 

        userThoughts.push({
            username: `${first} ${last}`, 
            content: randomThought, 
    });
}

const thoughtData = await Thoughts.create(userThoughts);

await User.create({
    username: 'John Doe',
    thoughts: 'This is my thought', 
    userThoughts: thoughtData.map(({ _id }) => _id),
});

console.table(userThoughts);
console.log('Seeding Complete...');
process.exit(0);
} catch(error) {
    console.error('Error seeding DB: ', error);
    process.exit(1);
}