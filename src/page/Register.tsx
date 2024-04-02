import Add from '../img/addAvatar.png';
export function Register() {
    return (
            <div className={'formContainer'}>
                <div className={'formWrapper'}>
                    <span className={'logo'}>KingPj Chat</span>
                    <span className={'title'}>Register</span>
                    <form>
                        <input type="text" placeholder={'display name'}/>
                        <input type="email" placeholder={'email'}/>
                        <input type="password" placeholder={'password'}/>
                        <input type="file" id='file' hidden={true}/>
                        <label htmlFor={'file'}>
                            <img src={Add} alt={'add image'}/>
                            <span>Add an avatar</span>
                        </label>
                        <button>Sign up</button>
                    </form>
                    <p>You do have an Account? Login</p>
                </div>
            </div>
    )
}
