# Todo-App

A responsive Todo application built with React that allows users to create, manage, edit, complete, filter, and delete tasks with optional due dates.

## 🚀 Live Demo

[Todo-App Live Demo](https://sangeet-30.github.io/React_Projects/Todo-App/)

## 📌 Overview

Todo-App is a React-based task management application designed to practice and demonstrate core React concepts while building a practical and responsive user interface.

The application provides a simple way to add and manage daily tasks, track their completion status, assign dates, and filter tasks according to their current state.

The project was initially created as a basic Todo application and then improved with additional functionality, responsive styling, better UI structure, task statistics, filtering, editing, and an empty-state interface.

## ✨ Features

- Add new todos
- Add a due date to todos
- Mark todos as completed
- Edit existing todos
- Delete individual todos
- Filter todos by:
  - All
  - Active
  - Completed
- View task statistics:
  - Total
  - Active
  - Completed
- Clear all completed todos
- Responsive design for different screen sizes
- Mobile-friendly task layout
- Responsive add-todo section
- Responsive action buttons
- Empty-state message when there are no todos
- Clean and simple user interface
- GitHub Pages deployment

## 🛠️ Tech Stack

- React
- JavaScript
- HTML
- CSS
- Vite
- Git & GitHub
- GitHub Actions
- GitHub Pages

## ⚛️ React Concepts Used

This project was built to practice several fundamental React concepts, including:

- Functional components
- JSX
- Props
- State management
- Event handling
- Conditional rendering
- List rendering
- Array methods
- Component-based UI structure
- CSS Modules
- Form/input handling

## 📋 Todo Functionality

### Add Todo

Users can enter a task and select a date before adding it to the todo list.

### Complete Todo

Each todo contains a checkbox that allows the user to mark the task as completed.

Completed tasks are visually distinguished using a strikethrough style.

### Edit Todo

The Edit button allows users to modify an existing todo and its date.

### Delete Todo

Individual todos can be removed using the delete button.

### Filter Todos

The application provides three filters:

- **All** — displays all todos
- **Active** — displays incomplete todos
- **Completed** — displays completed todos

### Clear Completed

The **Clear Completed** button removes all completed todos at once.

### Todo Statistics

The application displays:

- Total number of todos
- Number of active todos
- Number of completed todos

## 📱 Responsive Design

The application is designed to work across different screen sizes.

The layout adapts for:

- Desktop
- Tablet
- Mobile
- Small mobile screens

On smaller screens:

- The todo input section changes layout
- Todo content remains readable
- Delete and Edit buttons move below the task content
- Long task text wraps instead of overflowing
- Controls remain accessible
- Footer content adapts to smaller screen widths

## 📂 Project Structure

```text
Todo-App/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── AddTodo/
│   │   ├── ...
│   │
│   ├── App.jsx
│   ├── App.css
│   └── ...
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
