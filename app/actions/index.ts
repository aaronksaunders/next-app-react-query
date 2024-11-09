"use server";

import Database from "better-sqlite3";

// Initialize database connection
const db = new Database('database.sqlite', { verbose: console.log });

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS some_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    data TEXT NOT NULL
  )
`);

export interface SomeData {
    id: number;
    data: string;
}

export const getSomeData = async () => {
    try {
        // Query data from SQLite
        const result = db
            .prepare("SELECT * FROM some_data")
            .all() as SomeData[];
        return {
            data: result,
        };
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

// Add a helper function to insert data
export const insertSomeData = async (data: string) => {
    try {
        const insert = db.prepare('INSERT INTO some_data (data) VALUES (?)');
        const result = insert.run(data);
        return {
            id: result.lastInsertRowid,
            success: true,
        };
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

// Add this to your existing actions
export async function getSomeDataById(id: string) {
    const result = db
        .prepare("SELECT * FROM some_data WHERE id = ?")
        .get(id) as SomeData | undefined;
    return result;
}
