import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useState } from 'react';
import Logo from '../assets/Zephyr-Logo.png'

function LoginModal({initialView,isModalOpen, onClose}) {
  const [openModal, setOpenModal] = useState(isModalOpen);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [currentView, showView] = useState(initialView)

  function setView(view){
    showView(view)
  }

  function onCloseModal() {
    setOpenModal(false)
    setEmail('')
    setName('')
    onClose()
  }

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="[ modal-body ][ space-y-3 ]">
            <img src={Logo} className='[ zephyr-logo ][ mx-auto ]' alt='logo'/>
            {
              currentView === 'login' ? (
                <h3 className="[ sign-in-txt ][ text-xl font-medium text-gray-900 dark:text-white ][ text-center ]">Login to your Zephyr account</h3>
              )
              :
              (
                <h3 className="[ sign-in-txt ][ text-xl font-medium text-gray-900 dark:text-white ][ text-center ]">Sign Up with Zephyr</h3>
              )
            }
            
           
            <div className='[ google-section ]'>
                <Button color='' fullSized className="[ google-btn ][ bg-gradient-to-r from-[#1c3e35] to-[#247a4d] ]">
                    <svg className="[ w-[30px] ]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M43 24.4313C43 23.084 42.8767 21.7885 42.6475 20.5449H24.3877V27.8945H34.8219C34.3724 30.2695 33.0065 32.2818 30.9532 33.6291V38.3964H37.2189C40.885 35.0886 43 30.2177 43 24.4313Z"
                        fill="#4285F4" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M24.3872 43.001C29.6219 43.001 34.0107 41.2996 37.2184 38.3978L30.9527 33.6305C29.2165 34.7705 26.9958 35.4441 24.3872 35.4441C19.3375 35.4441 15.0633 32.1018 13.5388 27.6108H7.06152V32.5337C10.2517 38.7433 16.8082 43.001 24.3872 43.001Z"
                        fill="#34A853" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.5395 27.6094C13.1516 26.4695 12.9313 25.2517 12.9313 23.9994C12.9313 22.7472 13.1516 21.5295 13.5395 20.3894V15.4668H7.06217C5.74911 18.0318 5 20.9336 5 23.9994C5 27.0654 5.74911 29.9673 7.06217 32.5323L13.5395 27.6094Z"
                        fill="#FBBC04" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M24.3872 12.5568C27.2336 12.5568 29.7894 13.5155 31.7987 15.3982L37.3595 9.94866C34.0018 6.88281 29.6131 5 24.3872 5C16.8082 5 10.2517 9.25777 7.06152 15.4674L13.5388 20.39C15.0633 15.8991 19.3375 12.5568 24.3872 12.5568Z"
                        fill="#EA4335" />
                    </svg>
                    <p className='[ text-white font-semibold ][ ml-2 ]'>Continue with Google</p>
                </Button>
            </div>
            <div class="flex items-center">
                <div class="flex-1 border-t border-gray-300"></div>
                <p class="[ mx-4 ][ font-[Roboto] font-[500] text-[15px] ]">Or continue with</p>
                <div class="flex-1 border-t border-gray-300"></div>
            </div>
            {
                currentView === 'signup' && (
                    <div className="[ name-input-section ]">
                        <div className="[ name-label ][ mb-2 block ]">
                            <Label htmlFor="name" value="Name" />
                        </div>
                        <TextInput
                            className="[ name-input ]"
                            id="name"
                            placeholder="John Brown"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>

                )
            }
            <div className="[ email-input-section ]">
              <div className="[ email-label ][ mb-2 block ]">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                className="[ email-input ]"
                id="email"
                placeholder="name@email.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="[ mb-2 block ]">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput id="password" type="password" required />
            </div>
            {
                currentView === 'login' && (
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                            Lost Password?
                        </a>
                    </div>
                )
            }
            <div className="w-full">
                {
                    currentView === 'login' ? (
                        <Button color='' fullSized className='[ login-btn ][ bg-primary hover:bg-[#8CC09F] ][ text-white hover:text-[#000000] ]'>Login</Button>
                    ):
                    (
                        <Button color='' fullSized className='[ login-btn ][ bg-primary hover:bg-[#8CC09F] ][ text-white hover:text-[#000000] ]'>Sign Up</Button>
                    )
                }
            </div>
            {
                currentView === 'login' ? (
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered?&nbsp;
                        <a onClick={() =>{setView('signup')}} href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                         Create account
                        </a>
                    </div>
                ):
                (
                    <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already Have an Account?&nbsp;
                        <a onClick={() =>{setView('login')}} href="#" className="text-cyan-700 hover:underline dark:text-cyan-500">
                         Sign In
                        </a>
                    </div>
                )
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;