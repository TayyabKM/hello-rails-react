greetings = [
  "Hello, world!",
  "Welcome to our app!",
  "Greetings and salutations!",
  "Hi there, how can I assist you?",
  "Hey, have a great day!"
]

greetings.each do |message|
  Greeting.create(message: message)
end
