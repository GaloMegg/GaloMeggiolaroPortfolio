import Project from './Project'
const ProjectMap = ({ allProjects }) => {
    return allProjects.map(project => <Project {...project} key={project.id} />)
}

export default ProjectMap