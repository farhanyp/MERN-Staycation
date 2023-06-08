import React from "react";
import { ColorRing } from 'react-loader-spinner'

const Loading = ()=>{
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              colors={['#152C5B','#152C5B','#152C5B','#152C5B','#152C5B']}
            />
            <h1 className="text-primary font-semibold text-xl">Loading...</h1>
        </div>
    )

}

export default Loading