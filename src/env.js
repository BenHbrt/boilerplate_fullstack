// FRONT-END LOCALHOST PORT

// This project uses the React.js default of localhost:3000 for the front-end development server. If you need to change this, please replace "start" in the package.json file under "scripts" with the following and set the port number as necessary:

// "start": "set PORT=3000 && react-scripts start"

const frontendPort = 3000
const frontendBase = "http://localhost:" + frontendPort


// BACK-END LOCALHOST PORT

const backendPort = 3001
const backendBase = "http://localhost:" + backendPort

module.exports = { frontendPort, frontendBase, backendPort, backendBase }