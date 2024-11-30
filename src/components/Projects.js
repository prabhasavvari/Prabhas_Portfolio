import React, {useState} from 'react';
import VideoModal from './VideoModal';

const projectData = [
  {
    image: '/images/imageAboutPage.png',
    title:'E-commerce Website',
    description: 'this project is about ... this project is about ... this project is about ... this project is about ... this project is about ...this project is about ... this project is about ... this project is about ... this project is about ... v this project is about ...',
    visitLink: 'https://www.youtube.com/watch?v=Nq7ok-OyEpg',
    githubLink: 'https://github.com/prabhasavvari/Prabhas_Portfolio',
  },
  {
    image: '/images/imageAboutPage.png',
    title:'E-commerce Website',
    description: 'this project is about ...',
    visitLink: 'https://www.youtube.com/watch?v=Nq7ok-OyEpg',
    githubLink: 'https://github.com/prabhasavvari/Prabhas_Portfolio',
  },
  {
    image: '/images/imageAboutPage.png',
    title:'E-commerce Website',
    description: 'this project is about ...',
    visitLink: 'https://www.youtube.com/watch?v=Nq7ok-OyEpg',
    githubLink: 'https://github.com/prabhasavvari/Prabhas_Portfolio',
  },
  {
    image: '/images/imageAboutPage.png',
    title:'E-commerce Website',
    description: 'this project is about ...',
    visitLink: 'https://www.youtube.com/watch?v=Nq7ok-OyEpg',
    githubLink: 'https://github.com/prabhasavvari/Prabhas_Portfolio',
  }
]

const Card = ({ image, title, description, visitLink, githubLink }) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <div className="col">
        <div className="card">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="mt-auto">
              <button onClick={handleOpenModal} className="btn border-primary">
                Visit
              </button>
              <a href={githubLink} className="btn"><img src="/images/github image.png" /></a>
            </div>
          </div>
        </div>
      </div>


      {/* Modal */}
      <VideoModal
        isOpen={isModalOpen}
        videoSrc={visitLink}
        onClose={handleCloseModal}
      />

    </>
  );
}

const Projects = () => {
  return (
    <section id="projects">
      <div className="container mt-4 pt-4">
        <h1 className="text-center">My Projects</h1>
        <div className="row mt-4 row-cols-2 row-cols-md-3 g-4">
        {projectData.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            visitLink={project.visitLink}
            githubLink={project.githubLink}
          />
        ))}
        </div>
      </div>
    </section>
  );
}

export default Projects
