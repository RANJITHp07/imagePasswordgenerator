import FormHeading from '../Component/formHeading'
import Form from '../Component/Form'

function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className='w-5/12 border-2 p-8 box_shadow rounded-lg'>
        <FormHeading text={"Login"}/>
        <Form page={false}/>
      </div>
      
    </div>
  )
}

export default LoginPage