import Image from 'next/image';
import React, {useState} from 'react';
import Projects from '../../api/project';
import ProjectSingle from '../../components/SingleProjects/ProjectSingle/page'

const ProjectSection = (props) => {
    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({

    })

    const [number, setCount] = useState(3);
    const [buttonActive, setButtonActive] = useState(false);

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    return (
        <section className="tp-project-section  p-12">
            <div className="container">
                <div className="tp-section-title p-6">
                    <span>Projects</span>
                    <h2>My Latest Project</h2>
                </div>

                <div className="tp-project-wrap   ">
                    {/* Tailwind grid system for the project items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                        {Projects.slice(0, number).map((project, pro) => (
                            <div className="tp-project-item" key={pro}>
                                <div className="tp-project-img" onClick={() => handleClickOpen(project)}>
                                    <Image src={project.pImg} alt="" layout="responsive" />
                                </div>
                                <div className="tp-project-content ">
                                    <span>{project.subTitle}</span>
                                    <h2 onClick={() => handleClickOpen(project)}>{project.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* "View all work" button */}
                    <div className={`project-btn ${buttonActive ? "hidden" : ""}`}>
                        <button
                            className="theme-btn"
                            onClick={() => setCount(number + number)}
                        >
                            View all work
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for the project details */}
            <ProjectSingle
                open={open}
                onClose={handleClose}
                title={state.title}
                pImg={state.ps1img}
                psub1img1={state.psub1img1}
                psub1img2={state.psub1img2}
            />

            <div className="visible-rotate-text">
                <h1>My Projects</h1>
            </div>
        </section>
    );
}

export default ProjectSection;