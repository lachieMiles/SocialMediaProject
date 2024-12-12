import db from '../config/connection.js';
import { Thought, User } from '../models/index.js';
import cleanDB from './cleanDB.js';

const seedDatabase = async () => {
    try {
        await db();

        await User.deleteMany({});
        await Thought.deleteMany({});
        console.log('Database Successfully cleared');

        const users = [
            {username: 'shareef.evans', email: 'shareef.evans@example.com'},
            {username: 'henry.agustin', email: 'henry.agustin@example.com'},
            {username: 'mo.said', email: 'mo.said@example.com'},
            {username: 'lachlan.miles', email: 'lachlan.miles@example.com'},
            {username: 'pingbo.zhu', email: 'pingbo.zhu@example.com'},
        ];
        await User.insertMany(users);

        const thoughts = [
            {
                thoughtText: 'My first thought',
                username: 'shareef.evans',
                reactions: [{reactionBody: '👌', username: 'pingbo.zhu' }],
            },
            {
                thoughtText: 'my second thought',
                username: 'lachlan.miles',
                reactions: [{ reactionBody: '👍', username: 'shareef.evans' }],
            },
            {
                thoughtText: 'this is my final thought',
                username: 'mo.said',
                reactions: [{ reactionBody: '🙌', username: 'henry.agustin' }],
            }
        ];
        await Thought.insertMany(thoughts);

        console.log('Database successfully seeded');
        process.exit(0);
    } catch(error) {
        console.error('Database not seeded: ', error);
        process.exit(1);
    }
};