let APIURL = '';

switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3002'
    break;
  case 'aa-cycle-client.herokuapp.com':
    APIURL = 'https://aa-cycle-app-project.herokuapp.com'
    break;
    default: 
    console.log('switch didnt work');
}

export default APIURL;