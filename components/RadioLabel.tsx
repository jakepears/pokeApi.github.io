/** @format */

interface Props {
	isSelected: boolean;
}

export function RadioIndicator({ isSelected }: Props) {
	return (
		<div
			className={`flex p-2 gap-2 ${
				isSelected ? 'flex p-2 gap-2 text-[#024E74]' : ''
			}`}>
			<div className='w-3 h-3 border-2 border-[#23292B] rounded-[50%] flex items-center content-end justify-center'>
				{isSelected && <div className='w-3 h-3 bg-[#23292B] rounded-[50%]' />}
			</div>
		</div>
	);
}
