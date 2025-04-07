import React from "react";
import SectionHeader from "../common/SectionHeader";
import SkillCard from "../common/SkillCard"; // Ensure the correct path to SkillCard

const SkillsSection: React.FC = () => {
    return (
        <section id="skills" className="skills">
            <SectionHeader title="Mis" highlightWord="Habilidades" />
            <div className="skills-container">

                {/* Frontend */}
                <div className="skill-category">
                    <h3 className="category-title">
                        <i className="fas fa-code category-icon"></i>
                        Frontend
                    </h3>
                    <div className="skills-grid">
                        <SkillCard
                            icon="fab fa-angular"
                            title="Angular"
                            level={80}
                            levelText="Intermedio/Avanzado"
                            description="SPAs, RxJS, NgRx, Componentes, Directivas, Angular Material"
                            highlight
                        />
                        <SkillCard
                            icon="fab fa-react"
                            title="React"
                            level={70}
                            levelText="Intermedio"
                            description="Hooks, Context API, Redux, React Router, Next.js"
                        />
                        <SkillCard
                            icon="fab fa-vuejs"
                            title="Vue.js"
                            level={65}
                            levelText="Básico/Intermedio"
                            description="Vuex, Vue Router, Composition API, componentes reactivos"
                        />
                    </div>
                </div>

                {/* Backend */}
                <div className="skill-category">
                    <h3 className="category-title">
                        <i className="fas fa-server category-icon"></i>
                        Backend
                    </h3>
                    <div className="skills-grid">
                        <SkillCard
                            icon="fab fa-node-js"
                            title="Node.js"
                            level={80}
                            levelText="Intermedio/Avanzado"
                            description="Express, NestJS, APIs REST/GraphQL, Autenticación JWT"
                            highlight
                        />
                        <SkillCard
                            icon="fab fa-laravel"
                            title="Laravel"
                            level={85}
                            levelText="Intermedio/Avanzado"
                            description="Eloquent ORM, Blade, Artisan, Migraciones, API Rest"
                            highlight
                        />
                        <SkillCard
                            icon="fas fa-code"
                            title="C#"
                            level={70}
                            levelText="Intermedio"
                            description=".NET Core, Entity Framework, LINQ, ASP.NET MVC"
                        />
                    </div>
                </div>

                {/* Bases de Datos */}
                <div className="skill-category">
                    <h3 className="category-title">
                        <i className="fas fa-database category-icon"></i>
                        Bases de Datos
                    </h3>
                    <div className="skills-grid">
                        <SkillCard
                            icon="fas fa-database"
                            title="MySQL"
                            level={92}
                            levelText="Avanzado"
                            description="Modelado relacional, optimización de queries, stored procedures, triggers"
                            highlight
                        />
                        <SkillCard
                            icon="fas fa-database"
                            title="PostgreSQL"
                            level={85}
                            levelText="Intermedio/Avanzado"
                            description="Consultas complejas, particionamiento, funciones avanzadas, Full-Text Search"
                        />
                        <SkillCard
                            icon="fas fa-database"
                            title="SQLite"
                            level={70}
                            levelText="Básico/Intermedio"
                            description="Bases de datos embebidas, aplicaciones móviles, configuración ligera, operaciones CRUD"
                        />
                    </div>
                </div>

                {/* Desarrollo Móvil */}
                <div className="skill-category">
                    <h3 className="category-title">
                        <i className="fas fa-mobile-alt category-icon"></i>
                        Desarrollo Móvil
                    </h3>
                    <div className="skills-grid">
                        <SkillCard
                            icon="fas fa-mobile-alt"
                            title="Flutter"
                            level={82}
                            levelText="Intermedio/Avanzado"
                            description="Desarrollo multiplataforma, integración con APIs, state management"
                        />
                    </div>
                </div>

                {/* Desarrollo Desktop */}
                <div className="skill-category">
                    <h3 className="category-title">
                        <i className="fas fa-desktop category-icon"></i>
                        Desarrollo Desktop
                    </h3>
                    <div className="skills-grid">
                        <SkillCard
                            icon="fab fa-python"
                            title="Python"
                            level={78}
                            levelText="Intermedio"
                            description="PyQt, Tkinter, aplicaciones empresariales, automatización"
                        />
                        <SkillCard
                            icon="fab fa-java"
                            title="Java"
                            level={75}
                            levelText="Intermedio"
                            description="JavaFX, Swing, patrones MVC, aplicaciones CRUD"
                        />
                        <SkillCard
                            icon="fas fa-code"
                            title="C# (.NET)"
                            level={65}
                            levelText="Básico/Intermedio"
                            description="Windows Forms, WPF, aplicaciones empresariales, conexión a bases de datos"
                        />
                    </div>
                </div>

                {/* Herramientas */}
                <div className="skill-category">
                    <h3 className="category-title">
                        <i className="fas fa-tools category-icon"></i>
                        Herramientas
                    </h3>
                    <div className="skills-grid">
                        <SkillCard
                            icon="fab fa-git-alt"
                            title="Git"
                            level={90}
                            levelText="Avanzado"
                            description="Control de versiones, Git Flow, resolución de conflictos"
                            highlight
                        />
                        <SkillCard
                            icon="fab fa-docker"
                            title="Docker"
                            level={75}
                            levelText="Intermedio"
                            description="Contenedores, Docker Compose, orquestación"
                        />
                        <SkillCard
                            icon="fas fa-cloud"
                            title="Virtualización"
                            level={70}
                            levelText="Intermedio"
                            description="VMware, VirtualBox, entornos virtualizados"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
