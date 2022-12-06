const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=c64d972be80f462c1ee1d2a2dc6ccb4a&query='+latitude+','+longitude+'&units=f'

    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service!',undefined);
        }else if(response.body.error){
            callback('Unable to find location',undefined);
        }else{
            callback(undefined,'It is currently '+response.body.current.temperature+' degress out. There is a '+response.body.current.precip+' % chance of rain.')
        } 
    })
}

module.exports=forecast