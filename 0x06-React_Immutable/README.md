# React_Immutable
[]() 0x06 []()
---

`Read` or `watch`:

* [Immutable Object concept]()
* [Immutable.js Documentation]()
* [Immutable.js GitHub]()

---

# NEED TO KNOW?
* [Immutable objects. Who, what, when, where, and why?]()
* [How to use the Immutable.js library to bring immutability to Javascript]()
* [The differences between List and Map]()
* [How to use Merge, Concat, and Deep Merging]()
* [What a lazy Seq is]()

---

# Setup
	* Install NodeJS 12.11.x
	* Install npm 6.11.x

The script below installs the 2 above at the `specified` <u>versions</u>.
```
	$ curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
	$ sudo bash nodesource_setup.sh
	$ sudo apt install nodejs
```

# Provided files
---

[`^`](#need-to-know)

---
## babel.config.js
```
  module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
    ],
  };
```
---

[`^`](#need-to-know)

---
# jsconfig.json
```
  {
    "compilerOptions": {
      "target": "es6"
    },
    "exclude": [
      "node_modules"
    ]
  }

```
---

[`^`](#need-to-know)

---
# package.json
```
  {
    "scripts": {
      "lint": "./node_modules/.bin/eslint",
      "check-lint": "lint [0-9]*.js",
      "test": "jest",
      "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
    },
    "devDependencies": {
      "@babel/core": "^7.6.0",
      "@babel/preset-env": "^7.6.0",
      "eslint": "^6.4.0",
      "eslint-config-airbnb-base": "^14.0.0",
      "eslint-plugin-import": "^2.18.2",
      "eslint-plugin-jest": "^22.17.0",
      "jest": "^24.9.0"
    },
    "dependencies": {
      "immutable": "^4.0.0-rc.12"
    }
  }
```
---



---

[`^`](#need-to-know)
[`setup`](#setup)
---
