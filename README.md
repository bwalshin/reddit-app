## Wireframe
 - [x] Main Components - How are the arranged?
 - [ ] User flow and transitions
 - [x] Error states
 - [x] How your application will look at different screen sizes

![Wireframe Image][Wireframe Image] \
![Error State][Error State] \
![Styles][Styles] \
[Wireframe Miro Board]

## Technologies used
- [ ] How to break up your design into components
- [ ] *application*
- [ ] *application*

## Features
- [ ] Application Color Palette

## Future work
- [ ] *Task* 
- [ ] *Task* 

### Links
- [Group Project Overview]
- [Codecademy Project Tasks]


-------------

<div align="center">

* final product image here *

</div>

## Table of contents

- [Wireframe](#wireframe)
- [Technologies used](#technologies-used)
- [Features](#features)
- [Future work](#future-work)
  - [Links](#links)
- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
- [Codebase](#codebase)
  - [Technologies](#technologies)
  - [Folder structure](#folder-structure)
  - [Code Style](#code-style)
- [Setup Process](#setup-process)
- [Acknowledgments](#acknowledgments)

## Introduction

https://shields.io
- issues
- license

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
├── components     # Reusabble parts
├── features       # Redux slices
├── helpers        # Utilify functions
├── hooks          # Custom hooks
├── pages          # Application views
├── store          # Redux store configuration
└── theme          # Material UI theme configuration
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

  [Wireframe Miro Board]: https://miro.com/app/board/uXjVO8Y0A8w=/