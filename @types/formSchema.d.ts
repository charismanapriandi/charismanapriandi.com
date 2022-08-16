declare namespace FormSchema {
  export interface GetInTouch {
    name: string;
    email: string;
    message: string;
  }
  export interface Login {
    username: string;
    password: string;
  }
  declare namespace Category {
    export interface Create {
      name: string;
      type: string;
    }
  }
  declare namespace Technology {
    export interface Create {
      name: string;
      type: string;
      url: string;
      logo: string;
    }
  }
  declare namespace Project {
    export interface Create {
      name: string;
      type: string;
      url: string;
      description: string;
      logo: string;
      technologies: string[];
    }
  }
}