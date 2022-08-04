export interface SectionInterface {
  id: string;
  content: string;
  size: 'lg' | 'md' | 'sm';
  type?: string;
}

export interface SelectOption {
  title: string;
  value: string;
}

export interface Variable {
  key: string;
  value: string;
}
