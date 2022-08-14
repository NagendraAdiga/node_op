const url = require("url");

const myUrl = new URL("https://nagss.dev:3000/home?id=123&status=active");

// serialized URL
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

// hostname (doesn't reutrn port)
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// params
console.log(myUrl.searchParams);

// add params
myUrl.searchParams.append("categoty", "2");

console.log(myUrl.searchParams);

myUrl.searchParams.forEach((val, key) => console.log(`${key}: ${val}`));
