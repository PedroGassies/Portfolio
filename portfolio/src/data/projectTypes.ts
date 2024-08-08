export interface Skills{
    name:string,
    logo:string
}

export interface Project{
    id:number,
    title:string,
    description:string,
    skills:Skills[],
    websiteLink :string,
    githubLink:string,
    images:string[],
    year:number
}

