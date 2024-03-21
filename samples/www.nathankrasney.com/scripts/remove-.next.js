const fs = require("fs").promises;

const directoryPath = ".next"; // Replace with the actual path

async function removeDirectory() {
  try {
    // Check if the directory exists
    await fs.access(directoryPath);

    // Remove the directory and its contents
    await fs.rm(directoryPath, { recursive: true });

    console.log(`Directory ${directoryPath} removed`);
  } catch (error) {
    console.log(`Directory ${directoryPath} does not exist`);
  }
}

removeDirectory();