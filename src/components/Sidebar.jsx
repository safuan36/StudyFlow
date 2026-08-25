import Icon from './Icon'

const navigation = [
  { id: 'dashboard', label: 'Dashboard', icon: 'grid' },
  { id: 'tasks', label: 'Tasks', icon: 'check' },
  { id: 'subjects', label: 'Subjects', icon: 'book' },
  { id: 'progress', label: 'Progress', icon: 'chart' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
]

function Sidebar({ activePage, onNavigate }) {
  return <aside className="sidebar">
    <button className="brand" type="button" onClick={() => onNavigate('dashboard')} aria-label="StudyFlow dashboard"><span className="brand-mark">S</span><span>StudyFlow</span></button>
    <nav className="navigation" aria-label="Main navigation">
      {navigation.map((item) => <button key={item.id} className={`nav-item ${activePage === item.id ? 'active' : ''}`} type="button" onClick={() => onNavigate(item.id)} aria-current={activePage === item.id ? 'page' : undefined}><Icon name={item.icon} />{item.label}</button>)}
    </nav>
    <div className="sidebar-note"><span>Keep learning</span><strong>Small steps add up.</strong></div>
  </aside>
}

export default Sidebar
