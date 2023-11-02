/** @format */

interface Props {
	isSelected: boolean;
}

export function RadioIndicator({ isSelected }: Props) {
	return (
		<div className='inline-flex p-1'>
			<div className='w-5 h-5 border-2 rounded-[50%] flex items-center justify-center'>
				{isSelected && <div className='w-3 h-3 bg-[#024E74] rounded-[50%]' />}
			</div>
		</div>
	);
}
