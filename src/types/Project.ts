interface SingleProject {
  title: string;
  image: string;
  description: string;
  objectif: string;
  tech: string;
  github: string;
  link?: string;
}

export interface Project {
  project: SingleProject;
}
