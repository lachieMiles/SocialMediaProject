import { Thought, User } from '../models/index.js';
import process from 'process';

const cleanDB = async () => { //: Promise<void>
    try {
        await Thought.deleteMany({});
        console.log('Thoughts Deleted') // Deletes all Thoughts from Database
        await User.deleteMany({});
        console.log('Users Deleted') // Deletes all Users from Database
    } catch (err) {
        console.error('Error deleting information:', err); // Catches error and logs to console
        process.exit(1);
    }
};

export default cleanDB;