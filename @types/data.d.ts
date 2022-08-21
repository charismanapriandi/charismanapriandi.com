
declare namespace Data {
  export interface Technology {
    uuid: string;
    logo: string;
    name: string;
    tag: string;
    url: string;
  }
  export interface Tag {
    uuid: string;
    type: string;
    name: string;
  }
  export interface Project {
    createdAt: string;
    description: string;
    logo: string;
    name: string;
    tag: string;
    updatedAt: string;
    url: string;
    uuid: string;
  }
  export interface JWTPayload {
    uuid: string;
    username: string;
    email: string;
  }
}

