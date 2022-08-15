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
}