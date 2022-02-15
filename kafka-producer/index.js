const { Kafka } = require('kafkajs')



const kafka = new Kafka({
    clientId: 'My Local Kafka',
    brokers: ['192.168.0.114:9092']
  })


let data = [{
 
    first_name: 'Jeanette',
    last_name: 'Penddreth',
    email: 'jpenddreth0@census.gov',
    gender: 'Female',
    ip_address: '26.58.193.2'
  }, {
   
    first_name: 'Giavani',
    last_name: 'Frediani',
    email: 'gfrediani1@senate.gov',
    gender: 'Male',
    ip_address: '229.179.4.212'
  }, {
   
    first_name: 'Noell',
    last_name: 'Bea',
    email: 'nbea2@imageshack.us',
    gender: 'Female',
    ip_address: '180.66.162.255'
  }, {
    
    first_name: 'Willard',
    last_name: 'Valek',
    email: 'wvalek3@vk.com',
    gender: 'Male',
    ip_address: '67.76.188.26'
  }]

function rand_data_gen(){
    
  return JSON.stringify(data[Math.floor(Math.random()*data.length)])
}






const producer = kafka.producer()

let producer_func = async function(){
    await producer.connect()
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: rand_data_gen() },
      ],
    })
    
}

setInterval(producer_func, 2000);
