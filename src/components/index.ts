import dynamic from 'next/dynamic'

import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
// import Team from './Team'
// import Service from './Service'
// import Project from './Project'

const Team = dynamic(() => import('./Team'))
const Service = dynamic(() => import('./Service'))
const Project = dynamic(() => import('./Project'))
import Footer from './Footer'

export { Navbar, Hero, About, Team, Service, Project, Footer }
