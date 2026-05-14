import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/User.js';
import Resource from './models/Resource.js';

dotenv.config();

export const seedData = async () => {
  try {
    const userCount = await User.countDocuments();
    if (userCount > 0) {
      console.log('Data already seeded');
      return;
    }

    await User.deleteMany();
    await Resource.deleteMany();

    const createdUsers = await User.create([
      { name: 'John Doe', email: 'john@example.com', password: 'password123', branch: 'Computer Science', semester: 5, points: 50 },
      { name: 'Jane Smith', email: 'jane@example.com', password: 'password123', branch: 'Electronics', semester: 4, points: 120 }
    ]);

    const resources = [
      { title: 'Data Structures and Algorithms (MIT OCW)', type: 'Video', subject: 'Computer Science', semester: 5, url: 'https://www.youtube.com/watch?v=HtSuA80QTyo' },
      { title: 'Operating Systems - Process Synchronization', type: 'Video', subject: 'Computer Science', semester: 5, url: 'https://www.youtube.com/watch?v=rvNZTeAHcgU' },
      { title: 'Machine Learning Basics - CrashCourse', type: 'Video', subject: 'Computer Science', semester: 6, url: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI' },
      { title: 'React JS Full Course 2024', type: 'Video', subject: 'Computer Science', semester: 5, url: 'https://www.youtube.com/watch?v=bMknfKXIFA8' },
      { title: 'Digital Logic Design', type: 'PDF', subject: 'Electronics', semester: 4, url: 'https://example.com/dld-book.pdf' },
      { title: 'Database Management Systems Concepts', type: 'Notes', subject: 'Computer Science', semester: 5, url: 'https://example.com/dbms-notes' },
      { title: 'Introduction to Machine Learning Book', type: 'Book', subject: 'Computer Science', semester: 6, url: 'https://example.com/ml-book' },
    ];

    await Resource.insertMany(resources);

    console.log('Data Imported!');
  } catch (error) {
    console.error(`${error}`);
  }
};
