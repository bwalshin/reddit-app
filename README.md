<div align="center">

![Reddit-App Final][Reddit-App Final]
[stellar-gnome-96814d.netlify.app](https://stellar-gnome-96814d.netlify.app)

</div>

## Table of contents

- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
- [Wireframe](#wireframe)
- [Codebase](#codebase)
  - [Technologies](#technologies)
  - [Folder structure](#folder-structure)
  - [Code Style](#code-style)
- [Setup Process](#setup-process)
- [Acknowledgments](#acknowledgments)

## Introduction

![Issues Badge]
![License Badge]

## Wireframe

[Wireframe Miro Board] \
![Wireframe Image][Wireframe Image] \
![Error State][Error State]
![Styles][Styles]

## Codebase

### Technologies

Almost the entire codebase consists in **Javascript**

Here is a list of technologies used:

- **React**: Front-end library
- **Redux**: Global state management
- **Jest & React Testing Library**: Testing suite

### Folder structure

```sh
reddit-client/
├── public     # Public files used on the frontend
└── src        # Frontend SPA

reddit-client/src
├── api            # Api call / information
├── components     # Reusabble parts
├── features       # Redux slices
├── helpers        # Utilify functions
├── hooks          # Custom hooks
├── pages          # Application views
├── store          # Redux store configuration
└── theme          # Material UI theme configuration

reddit-client/src/components
└── card           # Card call and setup of each post

reddit-client/src/features
├── Avatar         # Users avatar image
├── Comment        # Post comment info
├── Headar         # Page header
├── Home           # Home page error interactions
├── Post           # Individual post info
└── Subreddits     # Side navigation of subreddits listed
```

### Code Style

Running `Prettier` on-commit, which means you can write code in whatever style
you want and it will be automatically formatted according to the common style
when you run `git commit`.

## Setup Process

- Clone or download the repo
- Open the directory and run `yarn` to install
- Run development application by using `yarn start`

## Acknowledgments

The project is using
[Reddit JSON Api](https://github.com/reddit-archive/reddit/wiki/JSON) to get the
data from [Reddit](https://www.reddit.com/)

The project was a task given by [Codecademy](https://www.codecademy.com) being a
part of their full-stack engineer course path. The goal of the project was to
showcase all previews skills and technologies learned until this point on the
path (HTML / CSS, JavaScript, React, Redux, Jest, Enzyme and Selenium, Git and
Github Projects, Command line, Wireframes)



[//]: # (Reference links)

  [Group Project Overview]: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-22-portfolio-project-reddit-client/modules/fecp-22-group-project-react-redux/informationals/fecp-22-group-project-react-redux

  [Codecademy Project Tasks]: https://www.codecademy.com/paths/front-end-engineer-career-path/tracks/fecp-22-portfolio-project-reddit-client/modules/wdcp-22-reddit-client/kanban_projects/reddit-client

  [Wireframe Image]: https://github.com/bwalshin/reddit-app/blob/main/images/wireframe.png "Wireframe Image"

  [Error State]: https://github.com/bwalshin/reddit-app/blob/main/images/error-state.png "Error State"

  [Styles]: https://github.com/bwalshin/reddit-app/blob/main/images/styles.png "Styles"

  [Reddit-App Final]: https://github.com/bwalshin/reddit-app/blob/main/images/reddit-app_final.png "Reddit-App Final"

  [Wireframe Miro Board]: https://miro.com/app/board/uXjVO8Y0A8w=/

  [Issues Badge]: https://img.shields.io/github/issues/bwalshin/reddit-app

  [License Badge]: https://img.shields.io/github/license/bwalshin/reddit-app