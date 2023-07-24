declare namespace Components {
  declare namespace Form {
    export interface Item {
      isSideBySide?: boolean;
    }
  }
  export interface Anchor extends React.HTMLProps<HTMLAnchorElement> {
    children: React.ReactNode;
  }
  declare namespace Modal {
    export interface Wraper {
      isOpen: boolean;
    }
    export interface Card extends emotionAsProps {}
  }
  export interface ModalForm<E = any> {
    isOpen: boolean;
    close: () => void;
    payload?: E;
    callback?: () => void;
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
    color?: 'primary' | 'secondary' | 'error' | 'success'
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
    color?: 'primary' | 'secondary' | 'highlight' | 'disabled';
    weight?: 500 | 300;
  }
  export type Icon = {
    color?: Common.TextColor;
  }
  export interface IconSvg extends React.SVGProps<SVGSVGElement> {
    variant?: 'solid' | 'outline',
    size?: number;
  }
  declare namespace Field {
    export interface Input extends React.HTMLProps<HTMLInputElement> {
      label?: string;
      error?: string;
      name: string;
    }
    export interface UploadFile extends Omit<Input, 'type'> {
      preview?: string;
    }
    export interface SelectC extends Input {
      options: Common.OptionValues[];
      setValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<any>>
    };
    export interface Textarea extends React.HTMLProps<HTMLTextAreaElement> {}
  }
  declare namespace Card {
    export interface Project {
      logo: string;
      name: string;
      href: string;
      description: string;
      onExpand: () => void;
      onCollapse: () => void;
      isExpanded: boolean;
    }
    export interface Record {
      experienceCount: string;
      projectCount: string;
    }
    export interface Technology {
      logo: string;
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
