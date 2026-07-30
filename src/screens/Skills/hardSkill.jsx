import React from "react";
import Navbar from "../../components/Navbar/navbar";
import "./hardSkill.css";

export default function HardSkill() {
    return (
        <div className="hard-skill">
            <Navbar />
            <main className="hard-skill-content">
                {sections.map((section, index) => (
                    <section className="skill-category" key={index}>
                       <div className="category-header">
                            <p className="hard-skill-list-title"> {section.title} </p>
                        </div>
                        <div className="skills-grid">
                            {section.skills.map((skill, i) => (
                                <div className="skill-card" key={i}>
                                    <i className={skill.icon}></i>
                                    <span className="skill-name"> {skill.title} </span>
                                    {/* <span className="skill-level">{skill.level}  </span>*/}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </main>
        </div>
    );
}

const languages = [
    { title: 'Java', level: 'Avançado', icon: 'devicon-java-plain colored' },
    { title: 'JavaScript', level: 'Intermediário', icon: 'devicon-javascript-plain colored' },
    { title: 'TypeScript', level: 'Intermediário', icon: 'devicon-typescript-plain colored' },
    { title: 'Python', level: 'Básico', icon: 'devicon-python-plain colored' },
    { title: 'PHP', level: 'Básico', icon: 'devicon-php-plain colored' },
    { title: 'SQL', level: 'Avançado', icon: 'devicon-sqlite-plain colored' },
];

const markup = [
    { title: 'HTML', level: 'Avançado', icon: 'devicon-html5-plain colored' },
    { title: 'CSS', level: 'Intermediário', icon: 'devicon-css3-plain colored' },
];

const frameworks = [
    { title: 'React', level: 'Intermediário', icon: 'devicon-react-original colored' },
    { title: 'React Native', level: 'Intermediário', icon: 'devicon-react-original colored' },
    { title: 'Angular.js', level: 'Básico', icon: 'devicon-angularjs-plain colored' },
    { title: 'Adianti', level: 'Básico', icon: 'devicon-php-plain colored'},
];

const databases = [
    { title: 'PostgreSQL', level: 'Avançado', icon: 'devicon-postgresql-plain colored' },
    { title: 'Firebase', level: 'Básico', icon: 'devicon-firebase-plain colored' },
    { title: 'Supabase', level: 'Básico', icon: 'devicon-supabase-plain colored' },
];

const tools = [
    { title: 'Visual Studio Code', level: 'Intermediário', icon: 'devicon-vscode-plain colored' },
    { title: 'Git', level: 'Intermediário', icon: 'devicon-git-plain colored' },
    { title: 'GitHub', level: 'Intermediário', icon: 'devicon-github-original colored' },
    { title: 'Docker', level: 'Básico', icon: 'devicon-docker-plain colored' },
];

const sections = [
    {
        title: "Minha Stack de Tecnologias",
        skills: languages
    },
    {
        title: "Ferramentas",
        skills: tools
    },
    {
        title: "Frameworks & Bibliotecas",
        skills: frameworks
    },
    {
        title: "Bancos de Dados",
        skills: databases
    },
    {
        title: "Marcação & Estilo",
        skills: markup
    }
];
