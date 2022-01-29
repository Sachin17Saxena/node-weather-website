const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FjaGluMTdzYXhlbmEiLCJhIjoiY2t5c3RxcnJwMDdtZTJvcGx6ajJubWg5eSJ9.HRVve_hLjgHN6RS9TnlmFQ&limit=1'
    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect to location services',undefined)
        }
        else if(body.features.length===0)
        {
            callback('Unable to access location information',undefined)
        }
        else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }

    })

}


module.exports=geocode