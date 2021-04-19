require 'rails_helper'

RSpec.describe "Items", type: :request do
  describe "GET /items" do
    it 'gets a list of items' do
      # arrange - there needs to be some data in the db for the response
      user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
      party1 = Party.create! party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id
       Item.create!(item_bringing:'cups',allergies:'none',party_id: party1.id ,user_id: user1.id)
      # act - simulating the HTTP GET request
      get '/items'

      # assert
      item_response = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(item_response.length).to eq 1
      first_item = item_response.first
      expect(first_item['item_bringing']).to eq 'cups'
      expect(first_item['allergies']).to eq 'none'
      expect(first_item['party_id']).to eq party1.id
      expect(first_item['user_id']).to eq user1.id
    end
  end
  describe "POST /items" do
      it 'creates a new item' do
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
        party1 = Party.create! party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id
        # Item.create!(item_bringing:'cups',allergies:'none',party_id: party1.id ,user_id: user1.id)
        # arrange - build request with params
        item_params = {
          item: {
            item_bringing:'cups',
            allergies:'none',
            party_id: party1.id ,
            user_id: user1.id
          }
        }
        # act - make POST request
        post '/items', params: item_params
        # assert
        item = Item.all
        item_response = JSON.parse(response.body)
        expect(item_response['item_bringing']).to eq 'cups'
        expect(item_response['allergies']).to eq 'none'
        expect(item_response['party_id']).to eq party1.id
        expect(item_response['user_id']).to eq user1.id
      end
    end

      it 'cannot create a new item without an item bringing' do
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
        party1 = Party.create! party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id
        item_params = {
          item: {
            allergies:'none',
            party_id: party1.id ,
            user_id: user1.id
          }
        }
        post '/items', params: item_params
        error_response = JSON.parse(response.body)
        expect(error_response['item_bringing']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end
end
#       it 'cannot create a new party without a party start time' do
#         user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
#         party_params = {
#           party: {
#             party_name:"reunion party",
#             location: '2342 good street',
#             description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
#             user_id: user1.id
#           }
#         }
#         post '/items', params: party_params
#         error_response = JSON.parse(response.body)
#         expect(error_response['party_start_time']).to include "can't be blank"
#         expect(response).to have_http_status(422)
#       end
#
#       it 'cannot create a new party without a location' do
#         user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
#         party_params = {
#           party: {
#             party_name:"reunion party",
#             party_start_time: "7:00pm",
#             description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
#             user_id: user1.id
#           }
#         }
#         post '/items', params: party_params
#         error_response = JSON.parse(response.body)
#         expect(error_response['location']).to include "can't be blank"
#         expect(response).to have_http_status(422)
#       end
#     end
#     it 'cannot create a new party without a description' do
#       user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
#       party_params = {
#         party: {
#           party_name:"reunion party",
#           party_start_time: "7:00pm",
#           location:'2342 good street',
#           user_id: user1.id
#         }
#       }
#       post '/items', params: party_params
#       error_response = JSON.parse(response.body)
#       expect(error_response['description']).to include "can't be blank"
#       expect(response).to have_http_status(422)
#     end
#   it 'cannot create a new party without a user' do
#     user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
#     party_params = {
#       party: {
#         party_name: 'reunion party',
#         party_start_time: "7:00pm",
#         location: '2342 good street',
#         description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
#       }
#     }
#     post '/items', params: party_params
#     error_response = JSON.parse(response.body)
#     expect(error_response['user_id']).to include "can't be blank"
#     expect(response).to have_http_status(422)
#   end
# end
#
#
#
#     describe 'PUT /items' do
#       it 'edits a party' do
#         # arrange - there needs to be a party in the DB to update
#         user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
#
#         party = Party.create!(party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id)
#         # arrange - the request params are trying to edit that party_id
#         update_party_params = {
#           party: {
#             party_name:"reunion party",
#             party_start_time: "7pm",
#             location:'2342 good street',
#             description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
#             user_id: user1.id
#           }
#         }
#         # act
#
#         put "/items/#{party.id}", params: update_party_params
#
#         # assert - on response
#         updated_party_response = JSON.parse(response.body)
#         expect(updated_party_response['party_name']).to eq 'reunion party'
#         expect(updated_party_response['party_start_time']).to eq "7pm"
#         expect(updated_party_response['location']).to eq '2342 good street'
#         expect(updated_party_response['description']).to eq "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
#         expect(updated_party_response['user_id']).to eq user1.id
#         expect(response).to have_http_status(200)
#       end
#     end
