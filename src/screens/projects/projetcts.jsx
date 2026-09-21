import React from 'react';
import Navbar from "../../components/Navbar/navbar";
import './projects.css';

export default function Projects() {
    return (
   <div className="projects">
              <Navbar />
              <main className="projects-content">
                  <p className="projects-subtitle">Aprendizado contínuo</p>
                  <h1 className="projects-title">Projetos</h1>
                  <p className="projects-description">
                    Explore alguns dos principais projetos da minha trajetória, desenvolvidos tanto no meio acadêmico quanto em contextos pessoais.
                  </p>
                      <div className="projects-row">
                              {projects.map((project, index) => (
                          <a
                              href={project.file}
                              target="_blank"
                              rel="noreferrer"
                              className="projects-card"
                              key={index}
                          >
                                  <h3 className="projects-name">{project.name}</h3>
                                      <p className="projects-card-description">{project.description}</p>
                                    <span className="projects-link">Ver projeto → (github)</span>
                          </a>
                      ))}        
              </div>
           </main>
       </div>
    );
}

const projects = [
    {
        name: 'SGO-Rodovias',
        description: 'Este projeto mobile acadêmico simula o sistema de uma concessionária de rodovias responsável por 350 km das BR-386 e BR-116. O aplicativo gerencia a manutenção de sistemas de iluminação, praças de pedágio e equipamentos de pista. Além das funcionalidades essenciais (CRUD e login dinâmico), o grande diferencial é um algoritmo que automatiza a alocação de equipes com base nas competências de cada técnico. Stack utilizada: TypeScript, React Native e Supabase.',
        file: 'https://github.com/SpaceCowboy-c/SGO-Rodovias',

    },

    {
    name: 'FinControl',
    description: 'Este projeto foi pensado para fins de estudo e conhecimento de novas tecnologias no mercado, englobando tecnologias bastante utilizadas em projetos. O sistema tem por objetivo principal o controle das finanças pessoais do usuário, com relatórios dinâmicos e dashboards viuais. Minha Stack contou com Python e FastAPI no backend e TypeScrip e Angular para o frontend.',
    file: 'https://github.com/SpaceCowboy-c/FinControl',
    },

    {
        name: 'AcolhePatinhas',
        description: 'Aliando desenvolvimento técnico e impacto social, este projeto foi criado para facilitar e gerenciar o processo de adoção de animais. A aplicação possui um sistema completo para o controle de adoções, incluindo o cadastro de usuários e animais e uma interface interativa com um feed de notícias dinâmico, inspirado no estilo do Instagram. Para a construção dessa solução, utilizei tecnologias modernas e consolidadas no mercado: Flutter e Dart no Front-end, Java com Spring Boot no Back-end e Supabase como banco de dados.',
        file: 'https://github.com/ArthurDelavy/acolhe-patinhas',
    },

  

];