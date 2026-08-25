# StudyFlow

StudyFlow is a React-based student productivity application designed to help students organize tasks and keep track of their study progress.

The project was developed as part of an AI-assisted development assignment, using AI as a development assistant while manually reviewing, testing, and refining the generated application.

## Features

* Student productivity dashboard
* Dashboard summary statistics
* Task management
* Add new tasks
* Mark tasks as completed or incomplete
* Task list view
* Dashboard task overview
* Subjects section
* Progress section
* Settings section
* Basic login/profile name functionality
* Responsive frontend layout

## Technology Stack

* React
* JavaScript
* Vite
* CSS
* Git & GitHub
* AI-assisted development with Codex

## AI-Assisted Development

AI was used as a development assistant throughout the project.

The development process followed an iterative workflow:

1. Define the desired application and UI requirements.
2. Use AI to generate the initial React implementation.
3. Run and inspect the application manually.
4. Identify visual, functional, and UX problems.
5. Provide more precise prompts to the AI based on the review.
6. Test the updated implementation.
7. Repeat the process where necessary.
8. Document the final application and development process.

The AI was primarily used for implementation assistance, while application testing, requirement decisions, issue identification, and feature prioritization were performed manually.

## Manual Review and Improvements

After the initial AI-generated version was reviewed, several issues were identified.

Examples include:

* Dashboard statistics were initially hardcoded.
* User information was initially hardcoded.
* The displayed date was static.
* Several buttons and interactions were initially non-functional.
* Sidebar navigation needed to be converted into functional views.
* Tasks needed shared state rather than separate hardcoded task lists.
* Task completion needed to update the application state.
* The Add Task interaction needed to become functional.
* The Dashboard "View all" action needed to open the Tasks view.
* A basic login/profile flow was added so the user's entered name could be displayed dynamically.

These observations were then used to create more precise follow-up prompts for the AI implementation.

## Project Structure

```text
src/
├── components/
│   ├── Icon.jsx
│   ├── Sidebar.jsx
│   └── TaskList.jsx
│
├── pages/
│   ├── DashboardPage.jsx
│   ├── LoginPage.jsx
│   ├── PlaceholderPage.jsx
│   └── TasksPage.jsx
│
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Running the Project

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite in your browser.

## Current Scope

StudyFlow is currently a frontend prototype/MVP. It focuses on demonstrating the application concept and the AI-assisted development workflow rather than providing a production-ready backend system.

Future improvements could include:

* Persistent task storage
* Task deletion and editing
* Full Subjects functionality
* Detailed Progress analytics
* URL-based routing
* Browser Back/Forward navigation
* Backend authentication
* Database integration
* More advanced user settings

## Purpose

The primary purpose of this project is to demonstrate how AI can be used as a development assistant while keeping the developer involved in planning, reviewing, testing, correcting, and refining the generated implementation.
