export default function Form (props) {
    const {values, update, submit} = props

    function onChange(e) {
        const { name, value } = e.target
        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor='name'>Name
                    <input 
                    id='name'
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                    />
                </label>
                <label htmlFor='email'>Email
                    <input 
                        id='email'
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                <label htmlFor='role'>Role
                    <select id='role' name='role' onChange={onChange} value={values.role}>
                        <option value=''>Select Role</option>
                        <option value='backend'>Backend Engineer</option>
                        <option value='frontend'>Frontend Engineer</option>
                        <option value='ux'>UX Designer</option>
                        <option value='graphic'>Graphic Designer</option>
                    </select>
                </label>
                <button>Submit</button>
            </div>
        </form>
    )
}