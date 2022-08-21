declare namespace Response {
  declare namespace Auth {
    declare namespace Login {
      export interface Success {
        access_token: string;
        user: {
          uuid: string;
          name: string;
          username: string;
          email: string;
          phone: string;
        }
      }
      export interface Error {
        message: string;
        statusCode: number;
      }
    }
  }
  declare namespace User {
    export interface Profile {
      email: string;
      name: string;
      phone: string;
      username: string;
      uuid: string;
    }
  }
  declare namespace Tag {
    export interface Create {
      message: string;
      data: Data.Tag;
    } 
    export interface Update extends Create {}
    export interface GetAll extends Data.Tag {}
    export interface Delete extends Create {}
  }
  declare namespace Technology {
    export interface Create {
      message: string;
      data: Data.Technology;
    }
    export interface GetAll extends Data.Technology {}
    export interface Delete extends Create {}
  }
  declare namespace Project {
    export interface Get extends Data.Project {
      technologies: Array<Data.Technology>
    }
    export interface Create {
      message: string;
      data: Data.Project & {
        technologies: Array<Data.Technology>; 
        user: Data.JWTPayload;
      } 
    }
    export interface Delete {
      message: string;
    }
    export interface GetWithPaginate {
      total: number;
      currentPage: number;
      data: Get[];
    }
  }
  export interface Unauthorized {
    message: string;
    statusCode: 401;
  }
}