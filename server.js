import mysql from 'mysql2/promise';

const databaseConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'socket_test',
};

async function checkForChanges() {
  const connection = await mysql.createConnection(databaseConfig);

  try {
    // Execute a query to check for changes (e.g., select data)
    const [rows] = await connection.execute('SELECT * FROM customer');

    // Process the results (you can customize this part)
    console.log('Current data:', rows);
  } catch (error) {
    console.error('Error checking for changes:', error);
  } finally {
    connection.end();
  }
}

// Set an interval to periodically check for changes
setInterval(() => {
  checkForChanges();
}, 5000); // Check every 5 seconds (adjust as needed)
