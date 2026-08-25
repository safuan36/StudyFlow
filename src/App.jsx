import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import PlaceholderPage from './pages/PlaceholderPage'
import TasksPage from './pages/TasksPage'

const USER_NAME_KEY = 'studyflow-user-name'

const pageDetails = {
  dashboard: { title: 'Dashboard', date: 'Tuesday, September 12' },
  tasks: { title: 'Tasks' },
  subjects: { title: 'Subjects', description: 'Your subjects will be organized here soon.' },
  progress: { title: 'Progress', description: 'Your study progress will be available here soon.' },
  settings: { title: 'Settings', description: 'Your StudyFlow preferences will be available here soon.' },
}

const initialTasks = [
  { id: 1, title: 'Review calculus notes', subject: 'Mathematics', priority: 'High', completed: false, dueDate: '2026-09-12' },
  { id: 2, title: 'Complete lab report', subject: 'Physics', priority: 'Medium', completed: false, dueDate: '2026-09-14' },
  { id: 3, title: 'Read chapter 4', subject: 'Literature', priority: 'Low', completed: false, dueDate: '2026-09-16' },
]

function getSavedUserName() {
  return localStorage.getItem(USER_NAME_KEY)?.trim() || ''
}

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [userName, setUserName] = useState(getSavedUserName)
  const [tasks, setTasks] = useState(initialTasks)
  const page = pageDetails[activePage]
  const toggleTask = (id) => setTasks((currentTasks) => currentTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
  const deleteTask = (id) => setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  const addTask = (task) => setTasks((currentTasks) => [...currentTasks, { ...task, id: Date.now(), completed: false }])
  const login = (name) => {
    localStorage.setItem(USER_NAME_KEY, name)
    setUserName(name)
  }
  const logout = () => {
    localStorage.removeItem(USER_NAME_KEY)
    setUserName('')
    setActivePage('dashboard')
  }

  if (!userName) return <LoginPage onLogin={login} />

  let content
  if (activePage === 'dashboard') content = <DashboardPage userName={userName} tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} onAddTask={addTask} onViewAll={() => setActivePage('tasks')} />
  else if (activePage === 'tasks') content = <TasksPage tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
  else content = <PlaceholderPage title={page.title} description={page.description} />

  const initials = userName.split(/\s+/).map((name) => name[0]).join('').slice(0, 2).toUpperCase()
  return <div className="app-shell"><Sidebar activePage={activePage} onNavigate={setActivePage} /><main className="main-content"><header className="topbar"><div className="page-title"><p>{page.date || 'StudyFlow'}</p><h1>{page.title}</h1></div><div className="profile"><div className="avatar" aria-hidden="true">{initials}</div><div className="profile-copy"><strong>{userName}</strong><span>Student</span></div><button className="profile-logout" type="button" onClick={logout}>Log out</button></div></header>{content}</main></div>
}

export default App
