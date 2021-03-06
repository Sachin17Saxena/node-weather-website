const request=require('request')
const forecast=(latitude,longitude,callback)=>{
const url='http://api.weatherstack.com/current?access_key=41341b361ee2191f588d517e80d2d05c&query=37.8267,-122.4233&query='+latitude+','+longitude+'&unit=f'

request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to web service',undefined)
    
        }
        else if(body.error)
        {
            callback('Unable to find location',undefined)
    
        }
        else{

            callback(undefined,body.current.weather_descriptions[0]+". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The humidity is "+body.current.humidity+"%")
    
        }
     })
    

}
module.exports=forecast