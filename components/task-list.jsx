'use client'

import Icon from './icon'

function formatDueDate(dueDate) {
  const [year, month, day] = dueDate.split('-').map(Number)
  return `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month - 1]} ${day}, ${year}`
}

function TaskRow({ task, onToggle, onDelete, showDueDate = false }) {
  const completedLabel = task.completed ? `Mark ${task.title} incomplete` : `Mark ${task.title} complete`

  return <article className={`task-row ${task.completed ? 'is-completed' : ''}`}><button className="task-check" type="button" onClick={() => onToggle(task.id)} aria-label={completedLabel} aria-pressed={task.completed}>{task.completed && <Icon name="check" size={14} />}</button><div className="task-copy"><h3>{task.title}</h3><p>{task.subject}{showDueDate && ` · Due ${formatDueDate(task.dueDate)}`}</p></div><span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span><button className="task-delete" type="button" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`}><Icon name="trash" size={17} /><span>Delete</span></button><button className="task-arrow" type="button" aria-label={`View ${task.title}`}><Icon name="arrow" size={18} /></button></article>
}

export default function TaskList({ tasks, onToggle, onDelete, showDueDate = false }) {
  if (tasks.length === 0) return <div className="empty-tasks"><p>No tasks yet. Add one to get started.</p></div>
  return <div className="task-list">{tasks.map((task) => <TaskRow key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} showDueDate={showDueDate} />)}</div>
}
