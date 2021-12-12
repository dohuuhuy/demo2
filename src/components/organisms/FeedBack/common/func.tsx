import { FormInput } from './interface'

export const listForm: FormInput[] = [
  {
    name: 'name',
    type: 'text',
    label: '',
    placeholder: 'Name',
    require: 'true',
    autoComplete: 'off',
    enter: (props) => <input {...props} />
  },
  {
    name: 'email',
    type: 'text',
    label: '',
    placeholder: 'Email',
    require: 'true',
    autoComplete: 'off',
    enter: (props) => <input {...props} />
  },
  {
    name: 'phone',
    type: 'text',
    label: '',
    placeholder: 'Mobile No',
    require: 'true',
    autoComplete: 'off',
    enter: (props) => <input {...props} />
  },
  {
    name: 'message',
    type: 'text',
    label: '',
    placeholder: 'Message',
    require: 'true',
    maxLength: 500,
    rows: 5,
    autoComplete: 'off',
    enter: (props) => <textarea {...props} />
  }
]
