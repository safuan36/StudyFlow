'use client'

import { createContext, useContext, useMemo, useState, useSyncExternalStore } from 'react'

const USER_NAME_KEY = 'studyflow-user-name'

const initialTasks = [
  { id: 1, title: 'Review calculus notes', subject: 'Mathematics', priority: 'High', completed: false, dueDate: '2026-09-12' },
  { id: 2, title: 'Complete lab report', subject: 'Physics', priority: 'Medium', completed: false, dueDate: '2026-09-14' },
  { id: 3, title: 'Read chapter 4', subject: 'Literature', priority: 'Low', completed: false, dueDate: '2026-09-16' },
]

const StudyFlowContext = createContext(null)
const storageListeners = new Set()

function subscribeToStorage(listener) {
  storageListeners.add(listener)
  return () => storageListeners.delete(listener)
}

function notifyStorageListeners() {
  storageListeners.forEach((listener) => listener())
}

function getStoredUserName() {
  return window.localStorage.getItem(USER_NAME_KEY)?.trim() || ''
}

function getClientReady() {
  return true
}

function getServerReady() {
  return false
}

function getServerUserName() {
  return ''
}

export function StudyFlowProvider({ children }) {
  const isReady = useSyncExternalStore(subscribeToStorage, getClientReady, getServerReady)
  const userName = useSyncExternalStore(subscribeToStorage, getStoredUserName, getServerUserName)
  const [tasks, setTasks] = useState(initialTasks)

  const value = useMemo(() => ({
    isReady,
    userName,
    tasks,
    login(name) {
      window.localStorage.setItem(USER_NAME_KEY, name)
      notifyStorageListeners()
    },
    logout() {
      window.localStorage.removeItem(USER_NAME_KEY)
      notifyStorageListeners()
    },
    toggleTask(id) {
      setTasks((currentTasks) => currentTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
    },
    deleteTask(id) {
      setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
    },
    addTask(task) {
      setTasks((currentTasks) => [...currentTasks, { ...task, id: Date.now(), completed: false }])
    },
  }), [isReady, tasks, userName])

  return <StudyFlowContext.Provider value={value}>{children}</StudyFlowContext.Provider>
}

export function useStudyFlow() {
  const context = useContext(StudyFlowContext)
  if (!context) throw new Error('useStudyFlow must be used within StudyFlowProvider')
  return context
}
