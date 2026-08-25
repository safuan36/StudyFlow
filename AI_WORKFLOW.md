# StudyFlow — AI-Assisted Development Workflow

## 1. Overview

StudyFlow was developed as a React-based student productivity application with AI used as a development assistant.

The goal was not to blindly generate the entire application with AI. Instead, the development process followed an iterative workflow where AI generated or modified code, while the application was manually reviewed, tested, and refined based on observed behavior.

The overall workflow was:

Requirements
↓
AI implementation
↓
Run the application
↓
Manual review
↓
Identify issues
↓
Write a more precise AI prompt
↓
AI correction/refactoring
↓
Manual testing
↓
Final review

---

## 2. How AI Was Used

Codex was primarily used as an implementation assistant.

It helped with:

- Creating the initial React interface.
- Structuring React components and pages.
- Implementing client-side navigation.
- Converting static task elements into interactive functionality.
- Managing shared task state.
- Implementing task creation and completion.
- Updating dashboard statistics from task data.
- Creating the basic login/profile experience.
- Refactoring the initial structure into components and pages.
- Running build checks and identifying implementation errors.

AI was not treated as an autonomous developer. Requirements and feature decisions were provided manually, and the generated application was reviewed after implementation.

---

## 3. Initial AI-Generated Version

The first version focused mainly on the visual design.

The AI generated a dashboard containing:

- A sidebar
- Dashboard summary cards
- Today's tasks
- Priority indicators
- Add Task button
- Progress information
- Subject information
- User profile area

The initial result looked like a realistic productivity application, but manual inspection showed that much of the application was static.

---

## 4. Manual Review of Version 1

After running the first version, several issues were identified manually.

### Static Data

Several dashboard values were hardcoded rather than calculated dynamically.

Examples included:

- Total task count
- Completed task count
- Study progress percentage
- User name
- Displayed date

### Non-functional Interactions

The following controls were initially visual elements rather than complete application functionality:

- Add Task
- Task checkboxes
- View All
- Sidebar navigation

### Structural Issues

The initial React project had most of its application logic concentrated in a small number of files.

The project was later reorganized into reusable components and page components.

---

## 5. AI-Assisted Corrections

The issues identified during manual review were converted into more precise follow-up prompts.

### Navigation

The sidebar was changed from static UI elements into functional client-side navigation.

Separate views were created for:

- Dashboard
- Tasks
- Subjects
- Progress
- Settings

### Task Functionality

The task system was changed from static sample content into shared React state.

Tasks were given structured properties such as:

- id
- title
- subject
- priority
- completed
- dueDate

This allowed Dashboard and Tasks to work with the same task data.

### Task Completion

Task checkboxes were made interactive.

A task can be marked completed or incomplete, and dashboard statistics can respond to the task state.

### Adding Tasks

The Add Task interaction was changed from a static button into a functional task creation flow.

### Dashboard Statistics

Dashboard statistics were connected to task state rather than remaining purely decorative values.

For example:

Progress = Completed Tasks / Total Tasks × 100

This made the dashboard reflect actual task activity.

---

## 6. Login and Profile Personalization

A basic local login experience was added.

The user can enter their name on the login screen.

The name is then used in the application so that the same user-provided name appears in areas such as:

- Dashboard greeting
- Upper-right profile section

The name is stored locally so that it can remain available after refreshing the browser.

This was intentionally implemented as a frontend prototype rather than real authentication.

---

## 7. Manual Testing

After each major AI-generated change, the application was manually tested.

Testing included:

### Navigation

- Dashboard
- Tasks
- Subjects
- Progress
- Settings

### Tasks

- Adding a task
- Completing a task
- Uncompleting a task
- Viewing tasks from the Dashboard
- Checking whether Dashboard and Tasks use the same data

### Dashboard

- Checking task counts
- Checking completion statistics
- Checking progress changes

### Login/Profile

- Entering a user name
- Checking that the name appears in the Dashboard
- Checking that the name appears in the profile area
- Refreshing the application

### Visual Review

The UI was also inspected for:

- Layout consistency
- Readability
- Navigation clarity
- General responsiveness
- Button behavior

---

## 8. Developer Decisions

Several decisions were made manually after reviewing the AI-generated application.

### Decision 1 — Keep the project within scope

The application was intentionally kept as a frontend MVP instead of immediately introducing:

- A backend
- A database
- Real authentication
- OAuth
- Complex state-management libraries

### Decision 2 — Preserve the visual design

When adding functionality, the existing dashboard design was preserved rather than replacing it with a new template.

### Decision 3 — Use shared task data

Dashboard and Tasks were designed to use the same task state instead of maintaining separate hardcoded task lists.

### Decision 4 — Test before requesting further AI changes

Instead of continuously asking AI to add features, the application was manually tested first. Problems found during testing were then turned into specific follow-up prompts.

---

## 9. Limitations Identified

The final prototype still has areas that could be improved in a future version.

Examples include:

- More complete task CRUD functionality
- Persistent task storage
- Fully functional Subjects management
- More detailed Progress analytics
- URL-based routing
- Browser Back/Forward navigation
- Backend authentication
- Database integration
- More advanced settings

These were treated as future improvements rather than expanding the project indefinitely.

---

## 10. Reflection

Using AI significantly reduced the amount of time required to create the initial interface and implement several React features.

However, AI-generated code still required human review.

The development process demonstrated that generating code is only one part of software development. Testing the application, identifying incorrect or incomplete behavior, deciding what should be changed, and providing precise follow-up instructions were also important parts of the process.

The project therefore used AI as a development assistant while keeping human judgment involved throughout the implementation.