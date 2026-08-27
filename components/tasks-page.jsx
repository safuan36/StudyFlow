'use client'

import TaskList from './task-list'
import { useStudyFlow } from './studyflow-provider'

export default function TasksPage() {
  const { tasks, toggleTask, deleteTask } = useStudyFlow()
  return <section className="tasks-page"><div className="section-heading"><div><h2>All Tasks</h2><p>Keep track of everything you need to study.</p></div><span className="task-count">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</span></div><TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} showDueDate /></section>
}
