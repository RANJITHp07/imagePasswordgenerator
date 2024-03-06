import FormHeading from '../Component/formHeading'
import Form from '../Component/Form'

function SignUpPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
    <div className='w-full md:w-1/2 lg:w-5/12 mx-2 border-2 p-8 box_shadow rounded-lg'>
      <FormHeading text={"SignUp"}/>
      <Form page={true}/>
    </div>
    
  </div>
  )
}

export default SignUpPage