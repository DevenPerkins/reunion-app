user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
puts "creating the user" 
user2 = User.create! email:'st@pid.com',  password:"2222111", first_name:"bb",last_name:"boby",over_21: true,allergies: "none"
puts "creating the user" 
#if we run seed again we will have to make variables for parties
party = [
  {
  party_name: "reunion party",
  party_start_time: "7:00pm",
  location:"77 goodale dr, san diego CA",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  user_id: user1.id
  }, {
  party_name: "Kevinn's party",
  party_start_time: "9:00pm",
  location:"888 sons dr, san diego CA",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  user_id: user2.id
}
]

party.each do |attribute|
  Party.create! attribute
  puts "creating the party: #{attribute}"
end

items = [
  {
    item_bringing:"cups",
    allergies:"none",
    party_id:1,
    user_id: user1.id
  },{
    item_bringing:"beer",
    allergies:"gluten",
    party_id:2,
    user_id: user2.id
  }
]
items.each do |attribute|
  Item.create! attribute
  puts "creating the items: #{attribute}"
end


