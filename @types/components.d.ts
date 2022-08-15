declare namespace Components {
  declare namespace Form {
    export interface Item {
      isSideBySide?: boolean;
    }
  }
  declare namespace Modal {
    export interface Wraper {
      isOpen: boolean;
    }
  }
  export interface ModalForm {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  }
  declare namespace Layout {
    export interface Admin {
      children: React.ReactNode;
    }
  }
  declare namespace Navbar {
    export interface Admin {}
  }
  export interface Table {
    rows: {
      [head: string]: string;
    }[]
  }
  export interface Brand {
    displayText?: boolean;
  }
  export interface Button {
    variant?: 'contained' | 'text';
  }
  export interface Container {
    children: ReactNode;
    size?: 'large'
  }
  export interface Divider {
    variant?: 'vertical';
    spacing?: number;
  }
  export type Grid = GridIsAutoFit | GridIsNotAutoFit
  interface GridIsNotAutoFit {
    isAutoFit: false;
    gap: number;
    column: Partial<BreakpointScreen> & {default: number}
    width?: never;
  }
  interface GridIsAutoFit {
    isAutoFit: true;
    width: string;
    column?: never;
    gap: number;
  }
  export interface Paper extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    padding?: number;
    isBordered?: boolean;
  }
  export interface Row extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    flexWrap?: 'wrap' | 'nowrap';
    alignItems?: Css.AlignItems;
    children: React.ReactNode;
    justifyContent?: Css.JustifyContent;
    gap?: number;
  }
  export interface Sidebar {
    isActive: boolean;
    handleClose: () => void;
  }
  export interface Text {
    textAlign?: 'left' | 'center' | 'right';
    size?: 'small' | 'large' | number;
    color?: 'primary' | 'secondary' | 'highlight';
    weight?: 500 | 300;
  }
  export interface Icon extends React.HTMLProps<HTMLSpanElement> {
    size?: number;
  }
  export interface IconSvg extends React.SVGProps<SVGSVGElement> {
    variant?: 'solid' | 'outline',
    size?: number;
  }
  declare namespace Field {
    export interface Input extends React.HTMLProps<HTMLInputElement> {}
    export interface Textarea extends React.HTMLProps<HTMLTextAreaElement> {}
  }
  declare namespace Card {
    export interface Project {
      name: string;
      description: string;
    }
    export interface Record {
      experienceCount: number;
      projectCount: number;
    }
    export interface Technology {
      image: string;
      type: string;
      name: string;
      url: string;
      color: string;
    }
  }
  declare namespace Toggle {
    export interface Switch {
      isOn: boolean;
    }
  }
}
