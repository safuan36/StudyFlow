'use client'

import { useState } from 'react'
import Link from 'next/link'
import Icon from './icon'
import TaskList from './task-list'
import { useStudyFlow } from './studyflow-provider'

function SummaryCard({ label, value, detail, variant, progress }) {
  return <article className="summary-card"><div><p>{label}</p><strong>{value}</strong><span>{detail}</span></div>{variant === 'progress' ? <div className="progress-ring" style={{ '--progress': `${progress}%` }}><span>{value}</span></div> : <div className={`card-symbol ${variant}`}>{variant === 'tasks' ? <Icon name="check" /> : <Icon name="chart" />}</div>}</article>
}

function AddTaskModal({ onClose }) {
  const [formData, setFormData] = useState({ title: '', subject: '', priority: 'Medium', dueDate: '' })
  const { addTask } = useStudyFlow()
  const updateField = (event) => setFormData({ ...formData, [event.target.name]: event.target.value })
  const submitTask = (event) => {
    event.preventDefault()
    if (!formData.title.trim() || !formData.subject.trim() || !formData.dueDate) return
    addTask({ ...formData, title: formData.title.trim(), subject: formData.subject.trim() })
    onClose()
  }

  return <div className="modal-backdrop" role="presentation"><section className="add-task-modal" role="dialog" aria-modal="true" aria-labelledby="add-task-title"><div className="modal-heading"><h2 id="add-task-title">Add Task</h2><button type="button" className="modal-close" onClick={onClose} aria-label="Close add task form">×</button></div><form onSubmit={submitTask}><label>Task title<input name="title" value={formData.title} onChange={updateField} placeholder="e.g. Review biology notes" required autoFocus /></label><label>Subject<input name="subject" value={formData.subject} onChange={updateField} placeholder="e.g. Biology" required /></label><div className="form-grid"><label>Priority<select name="priority" value={formData.priority} onChange={updateField}><option>High</option><option>Medium</option><option>Low</option></select></label><label>Due date<input type="date" name="dueDate" value={formData.dueDate} onChange={updateField} required /></label></div><div className="modal-actions"><button type="button" className="cancel-task" onClick={onClose}>Cancel</button><button className="add-task" type="submit">Add Task</button></div></form></section></div>
}

export default function DashboardPage() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
  const { userName, tasks, toggleTask, deleteTask } = useStudyFlow()
  const completedTasks = tasks.filter((task) => task.completed).length
  const progress = tasks.length ? Math.round((completedTasks / tasks.length) * 100) : 0

  return <><section className="welcome"><div><p className="eyebrow">YOUR STUDY SPACE</p><h2>Good morning, {userName}! <span aria-hidden="true">👋</span></h2><p>Here&apos;s what&apos;s happening with your studies today.</p></div><button className="add-task" type="button" onClick={() => setIsAddTaskOpen(true)}><Icon name="plus" size={19} />Add Task</button></section><section className="summary-grid" aria-label="Study summary"><SummaryCard label="Total Tasks" value={tasks.length} detail="All study tasks" variant="tasks" /><SummaryCard label="Completed Tasks" value={completedTasks} detail="Great work!" variant="completed" /><SummaryCard label="Study Progress" value={`${progress}%`} detail="This week" variant="progress" progress={progress} /></section><section className="tasks-section"><div className="section-heading"><div><h2>Today&apos;s Tasks</h2><p>Stay focused and make progress.</p></div><Link className="text-link" href="/tasks">View all <Icon name="arrow" size={16} /></Link></div><TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} /></section>{isAddTaskOpen && <AddTaskModal onClose={() => setIsAddTaskOpen(false)} />}</>
}
