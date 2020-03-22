# my-publisher

A command tool to publish my packages to npmjs.org (including private packages).

## Motivation

- Every day, I spent too much time to publish packages to npmjs.org.


## Installation

```
$ npm install -g my-publisher
```

## Usage

```
$ publish -m "your message"
```


## Development

- Create develop environment: create `dev.env` with content:
```
CURRENT_DIR=/your-dir/my-publisher-example
ACCESS=public
```

- Install dependency packages:
```
npm install
```

- Run script:
```
npm run dev
```


## License

This code is free to use under the terms of the MIT license.

