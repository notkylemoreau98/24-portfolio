const Skill = ({ title, img }) => {
  return (
    <div className='h-48 w-32 md:h-64 md:w-64 flex flex-col justify-center items-center'>
      <img
        className='h-40 w-40 bg-[#F6F6F6] rounded-full p-2 object-contain transition-all duration-500 max-h-[130px] md:max-h-[16rem]'
        src={img}
        alt={title}
      />
      <h4 className='text-center font-semibold text-[#6b6b6b] mt-3'>{title}</h4>
    </div>
  );
};

export default Skill;
