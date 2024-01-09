import { queryAPI, weakmap } from "./100-weak";

const endpoint = { protocol: 'http', name: 'getUsers' };
weakmap.get(endpoint);

queryAPI(endpoint);
console.log(weakmap.get(endpoint));

queryAPI(endpoint);
console.log(weakmap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);