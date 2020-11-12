Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

yarn install

To Run Test Suite:

yarn test

To Start Server:

yarn start

If you got this problem in browser console : Failed to execute 'postMessage' on 'DOMWindow', you have to put your localhost to https. To do so, follow the instructions below :

1. In project root :
```openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365```

2. In project root :
```openssl rsa -in keytmp.pem -out key.pem```

3. In package.json, change start lign to this :
```
...
"start": "export HTTPS=true&&SSL_CRT_FILE=cert.pem&&SSL_KEY_FILE=key.pem react-scripts start"
...```

4. When yarn start is launched, go to your localhost as https, click on advenced 