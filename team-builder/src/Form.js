export default function Form (props) {
    const {values, update, submit} = props

    return (
        <form>
            <div>
                <label htmlFor='name'>Name
                    <input />
                </label>
                <label htmlFor='email'>Email
                    <input />
                </label>
                <label htmlFor='role'>Role
                    <input />
                </label>
            </div>
        </form>
    )
}