export interface Project {
  title: string;
  description: string;
  additionalInfo: string;
  src?: string;
  heroImage?: string;
  desktopVideo?: string;
  mobileVideo?: string;
  codeLink?: string;
}

export interface Link {
  name: string;
  image: string;
  width: number;
  href: string;
}
