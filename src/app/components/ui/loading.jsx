import React from 'react';
import cn from 'clsx';
import Image from 'next/image';

function Loading() {
    return (
       <div className='w-full h-full flex justify-center items-center'>
            <Image width={200} height={200} className='animate-bounce' src={"https://cdn3d.iconscout.com/3d/premium/thumb/cryptocurrency-coins-8681909-6984687.png"} alt='loadding'/>
       </div>
    );
}

export default Loading ;
