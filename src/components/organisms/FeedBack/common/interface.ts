export interface FormInput {
  name: string
  type: string
  label: string
  placeholder: string
  require?: 'true' | 'false' | string
  autoComplete?: string
  enter?: ((props: FormInput) => JSX.Element) | any
  maxLength?: any
  rows?: any
}
