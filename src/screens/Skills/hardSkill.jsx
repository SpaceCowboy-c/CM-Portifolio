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
    { title: 'Java', level: '', icon: 'devicon-java-plain colored' },
    { title: 'JavaScript', level: '', icon: 'devicon-javascript-plain colored' },
    { title: 'TypeScript', level: '', icon: 'devicon-typescript-plain colored' },
    { title: 'Python', level: '', icon: 'devicon-python-plain colored' },
    { title: 'PHP', level: '', icon: 'devicon-php-plain colored' },
    { title: 'SQL', level: '', icon: 'devicon-sqlite-plain colored' },
    { title: 'Dart', level: '', icon: 'devicon-dart-plain colored' },
];

const markup = [
    { title: 'HTML', level: '', icon: 'devicon-html5-plain colored' },
    { title: 'CSS', level: '', icon: 'devicon-css3-plain colored' },
];

const frameworks = [
    { title: 'React', level: '', icon: 'devicon-react-original colored' },
    { title: 'React Native', level: '', icon: 'devicon-react-original colored' },
    { title: 'Angular.js', level: '', icon: 'devicon-angularjs-plain colored' },
    { title: 'Adianti', level: '', icon: 'devicon-php-plain colored'},
    { title: 'Flutter', level: '', icon: 'devicon-flutter-plain colored' },
];

const databases = [
    { title: 'PostgreSQL', level: '', icon: 'devicon-postgresql-plain colored' },
    { title: 'Firebase', level: '', icon: 'devicon-firebase-plain colored' },
    { title: 'Supabase', level: '', icon: 'devicon-supabase-plain colored' },
];

const tools = [
    { title: 'Visual Studio Code', level: '', icon: 'devicon-vscode-plain colored' },
    { title: 'Git', level: '', icon: 'devicon-git-plain colored' },
    { title: 'GitHub', level: '', icon: 'devicon-github-original colored' },
    { title: 'Docker', level: '', icon: 'devicon-docker-plain colored' },
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
