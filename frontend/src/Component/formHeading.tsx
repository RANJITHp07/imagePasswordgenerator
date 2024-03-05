import LockClockIcon from '@mui/icons-material/LockClock';

function FormHeading({text}:{text:string}) {
  return (
    <div className="flex justify-center items-center flex-col">
    <div className='p-3 rounded-full h-12 w-12 bg-indigo-950 flex justify-center items-center'>
        <LockClockIcon className='text-white'/> 
    </div>
    <p className='text-center font-semibold text-2xl'>{text}</p>
</div>
  )
}

export default FormHeading