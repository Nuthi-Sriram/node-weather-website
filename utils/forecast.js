const request=require('request')




const forecast=(longitude,latitude,callback)=>
{
    
const url='https://api.darksky.net/forecast/d33fc65633a8ba12c72cfdc05ae45245/' + latitude +','+ longitude + '?units=si'
request({url,json:true},(error,{body})=>{
if(error){
    callback('Unable to connect to weather service!',undefined)
}
else if(body.error){
       callback('Unable to find location',undefined)
     }
     else{
        callback(undefined,body.daily.data[0].summary+' It is currently '+body.currently.temperature+' degrees out.There is '+body.currently.precipProbability+'% chance of Rain')
        }



})

}


module.exports=forecast