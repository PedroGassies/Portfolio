export interface Skills {
    name: string;
    logo: string;
}

export interface ImageItem {
    type: 'image' | 'video';
    src: string;
    screen: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    skills: Skills[];
    websiteLink: string;
    githubLink: string;
    images: ImageItem[];
    screen:string;
    year: number;
}
