'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Icon from './icon'
import { useStudyFlow } from './studyflow-provider'

const navigation = [
  { href: '/dashboard', label: 'Dashboard', icon: 'grid' },
  { href: '/tasks', label: 'Tasks', icon: 'check' },
  { href: '/subjects', label: 'Subjects', icon: 'book' },
  { href: '/progress', label: 'Progress', icon: 'chart' },
  { href: '/settings', label: 'Settings', icon: 'settings' },
]

const pageDetails = {
  '/dashboard': { title: 'Dashboard', date: 'Tuesday, September 12' },
  '/tasks': { title: 'Tasks' },
  '/subjects': { title: 'Subjects' },
  '/progress': { title: 'Progress' },
  '/settings': { title: 'Settings' },
}

export default function AppShell({ children }) {
  const pathname = usePathname()
  const router = useRouter()
  const { isReady, userName, logout } = useStudyFlow()

  useEffect(() => {
    if (isReady && !userName) router.replace('/login')
  }, [isReady, router, userName])

  if (!isReady || !userName) return null

  const page = pageDetails[pathname] || pageDetails['/dashboard']
  const initials = userName.split(/\s+/).map((name) => name[0]).join('').slice(0, 2).toUpperCase()
  const handleLogout = () => {
    logout()
    router.replace('/login')
  }

  return <div className="app-shell"><aside className="sidebar"><Link className="brand" href="/dashboard" aria-label="StudyFlow dashboard"><span className="brand-mark">S</span><span>StudyFlow</span></Link><nav className="navigation" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} className={`nav-item ${pathname === item.href ? 'active' : ''}`} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}><Icon name={item.icon} />{item.label}</Link>)}</nav><div className="sidebar-note"><span>Keep learning</span><strong>Small steps add up.</strong></div></aside><main className="main-content"><header className="topbar"><div className="page-title"><p>{page.date || 'StudyFlow'}</p><h1>{page.title}</h1></div><div className="profile"><div className="avatar" aria-hidden="true">{initials}</div><div className="profile-copy"><strong>{userName}</strong><span>Student</span></div><button className="profile-logout" type="button" onClick={handleLogout}>Log out</button></div></header>{children}</main></div>
}
