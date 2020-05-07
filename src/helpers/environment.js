let APIURL = '';

switch (window.location.hostname) {
  case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3002/';
    break;
  case 'aa-cycle-client':
    APIURL = 'https://aa-cycle-client.herokuapp.com/';
}

export default APIURL;