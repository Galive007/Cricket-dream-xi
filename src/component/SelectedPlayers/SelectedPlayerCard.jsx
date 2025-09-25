
import deleteIcon from '../../assets/Frame.svg'
const SelectedPlayerCard = ({player,removePlayer}) => {
    // console.log(player);
    const handleDelete=()=>{
        removePlayer(player)
    }
    return (
        <div className='mb-2 p-6 border-1 border-gray-200 rounded-xl flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <img src={player.player_image} alt="" className='w-[80px] rounded-xl border-1 border-gray-200'/>
                <div className='space-y-4'>
                    <h3 className='text-[#131313] text-2xl font-semibold'>{player.player_name}</h3>
                    <p className='text-gray-500'>{player.player_role}</p>
                </div>
            </div>
            <div>
                <button onClick={handleDelete} className='btn bg-transparent border-0'>
                    <img src={deleteIcon} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayerCard;