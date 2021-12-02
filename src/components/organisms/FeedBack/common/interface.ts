export interface FormInput {
  name: string
  type: string
  label: string
  placeholder: string
  require: boolean
  autoComplete: string
  enter: (props: FormInput) => JSX.Element
  maxLength?: any
  rows?: any
}
