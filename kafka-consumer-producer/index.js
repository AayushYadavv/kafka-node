const { Kafka } = require('kafkajs')
let operartions = require("./operartions/add_user")
let producer = require("./producer")
require('./models')




const kafka = new Kafka({
    clientId: 'My Local Kafka',
    brokers: ['192.168.0.114:9092']
  })

const consumer = kafka.consumer({ groupId: 'test-group' })

let consumer_func = async function(){
    await consumer.connect()
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
    
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
     operartions.addUser(JSON.parse(message.value))
        console.log({
          value: message.value.toString(),
        })
      },
    })
}

//producer
setInterval(producer.producer_func, 2000);

//consumer
consumer_func()
