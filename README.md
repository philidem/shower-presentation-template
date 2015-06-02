Shower Presentation Template
=================

This repo provides a presentation template that uses the
[Shower Presentation Engine](http://shwr.me/).
It also provides conveniences for rendering your presentation
slides with **markdown** snippets.

The [Marko Template Engine](https://github.com/raptorjs/marko)
to render your presentation slides.

[Lasso](https://github.com/lasso-js/lasso) is used as the
build and deployment tool.

# Usage

## Prerequisites

0. Install Node.js 0.12+

## Initial Setup

0. Clone repo and change to repo directory
0. Run `npm install`

## Local Development Server:

**To launch server that watches for file changes and refreshes automatically:**

```bash
./run-server.sh
```

**To launch server that does not watch for file changes:**

```bash
node server.js
```

Open your web browser to `http://localhost:8888/`

## Build & Deploy

**To run production build:**

```bash
./run-build.sh --production true --url-prefix http://www.mycompany.com/presentation/
```

**Alternative for non-Unix-like environments:**

```bash
node build.js --production true --url-prefix http://www.mycompany.com/presentation/
```

**To deploy production build:**

Copy contents of `dist` directory to storage location associated
with `http://www.mycompany.com/presentation/`

## Customizing Your Presentation

The source for your presentation slides are located at:
`src/presentation/index.marko`

You should modify the content of the `index.marko` file for your
presentation.

The Shower theme is located at:
`src/presentation/shower-theme`

You can tweak the provided Shower theme or substitute it with another
compatible Shower theme.