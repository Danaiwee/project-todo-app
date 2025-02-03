
const NotificationCard = ({item}) => {
  const {title, date, time} = item;
  return (
    <div className='w-full flex flex-col bg-gray-500 rounded-lg px-3 py-2 relative mt-2'>
        <p className='font-bold text-md text-gray-900'>{title}</p>
        <p className='text-sm text-gray-200'>
            {date}, 
            <span>{time}</span>
        </p>
    </div>
  )
}

export default NotificationCard;