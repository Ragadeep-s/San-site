import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projectsData';

function ProjectDetails() {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const encodedProjectName = decodeURIComponent(projectName);
    for (const category of projectsData) {
      const foundProject = category.items.find(
        (item) => item.title === encodedProjectName
      );
      if (foundProject) {
        setProject({ ...foundProject, category: category.name });
        break;
      }
    }
  }, [projectName]);

  if (!project) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Not Found</h2>
          <Link to="/projects" className="text-blue-500 hover:underline">Back to Projects</Link>
        </div>
      </div>
    );
  }

  // Mock data for details, replace with actual data if needed in the future
  const details = {
    'Aalaporan thamizhan': {
      releaseDate: 'Main version (18th October 2017), reversion - (yet to be released)',
      description: 'A group of friends who were separated by miscommunication, reunites to stop a big scam project going to happen in their state.',
      watchLink: 'https://youtu.be/XKZR-be9dOo?si=00_mm6vnE9nSsJ9o',
    },
    'Kanave Kalaiyaathe': {
      releaseDate: '13th Sept 2018',
      description: 'A rich man after losing everything because of his money he understands money can\'t buy happiness, at the point of realisation he wakes up from his dream and realizes he is a middleclass man who is a real loser, he lost his friend and his girlfriend in real life too... So what happens next is the thrill',
      watchLink: 'https://youtu.be/w9LEWldaFnQ?si=GUwhZ--HLvRWd7tY',
    },
    'Muthal Maatram Un Kaiyil': {
      releaseDate: '16th July 2020',
      description: 'A Judge of a short film competition which is based on environmental protection rejects all the films with a cigarette in his hand, then everyone realizes that it was a shoot and everyone in those frames are actors... So his guilt is, if I need to change the world I need to be good...',
      watchLink: 'https://youtu.be/SXaz0GE7roM?si=Ca8Mpi3uc10nW5BF',
    },
    'Unnakkaga Vaazha Ninaikiren': {
      releaseDate: '25th Dec 2021',
      description: 'Swathi finds out her newly married husband struggles to forget her ex lover and she finally made him realise the true love and happiness stays within the married couple and there is a life after a heartbreak...',
      watchLink: 'https://drive.google.com/file/d/1PgRkjzl9mdalfegW7PbrbeLqoBPvnfh2/view?usp=drivesdk',
    },
    'Scared': {
      releaseDate: 'yet to be released soon...',
      description: 'A person who is a chain smoker gets a heart attack and dies in his dream, quits smoking after he wakes up...',
      watchLink: 'https://drive.google.com/file/d/1ZLss10-kVZDSLbLfZ-bR4IaOsUuB7h1v/view?usp=drivesdk',
    },
    'Mudintha Kathai Thodarvathillai (Iraivan Aetinile)': {
      releaseDate: '25 December 2020 (MX Player release )',
      description: 'Dev is brutally murdered by his wife Nithya\'s stalker. Krish is the budding reporter at SME TV. He starts to investigate this case. the reason for the murder may be jealousy, caste or revenge. Does this murder have any connection with history of castism in India?',
      watchLink: 'https://youtu.be/W5V4A6Hjh18?si=FHp8k2OceaVj39z4',
    },
    'The Last Wish': {
      releaseDate: 'yet to be released',
      description: 'Ankur is a man addicted to drugs, wishes to consume drugs for a last time and went to a hallucination which wasn\'t real, he sees people who are dead and later on realizes they were linked in his past life and because of his huge mistake a family was suicided. So he thinks the only solution for his all mistakes is his death.',
      watchLink: 'https://youtu.be/6qtU1gNlci4?si=axJy7dUHhD8eozEM',
    },
    'Venpani Malare': {
      releaseDate: 'Episode 1: 8th dec 2021 (Video is down)',
      description: 'Venpani Malarey is a Rom - Com Tamil Livin Series. The lead characters Raj and Vishwatha faces many problem by the Society & Friends because of their way of culture, but the love between them gets more stronger day by day. Did they get married? Let\'s wait and watch!',
      watchLink: 'https://youtu.be/-rZWOW8UfIk?si=ilnmaO4l3HqP87RL', // Link to Episode 1
    },
    'Aval Peyar Dhatchaeni': {
      releaseDate: '13th June 2022',
      description: 'Aval Peyar Dhatchaeni Tamil Album Song Exclusively Commerce Boys. Aval Peyar Dhatchaeni Composed by Santhan Anebajagane. The Album Stars Are Inspired From Neethane En Ponvasantham Movie Fames Samantha And Jeeva in the Lead. The Lyrics penned by Sudharsan Sedouramane with the Assistance of Keerthivasan. The Vocals rendered by Vigneshwar.',
      watchLink: 'https://youtu.be/zsN6838vfo4?si=fASfFevrAijeqZov',
    },
    'Avalo Athirai': {
      releaseDate: '28th March 2025',
      description: 'Presenting you the love feel music video #AvaloAthirai, Ft. Chandru Murugan, Kiruthiga Ganesh, Harish Lingaraj, Mithun Mitulesvar, Shyam Ganesh, Sri Vithya, Kathir, Gomathi and others. Music by Santhan Anebajagane, sung by Vallavan, Deepthi & directed by Sudharsan Sedouramane under the banner SS creation',
      watchLink: 'https://youtu.be/aScKBJbHPdg?si=2meyCYMFrtubeBEa',
    },
  };

  const projectDetails = details[project.title];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/projects" className="text-blue-500 hover:underline">Back to Projects</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={`/images/projects/${project.image}`}
              alt={project.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-4">Category: {project.category}</p>
            {projectDetails && (
              <>
                <p className="text-gray-700 mb-4">{projectDetails.description}</p>
             
