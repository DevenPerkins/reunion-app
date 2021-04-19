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

        it 'cannot create a new item without allergies' do
          user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
          party1 = Party.create! party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id
          item_params = {
            item: {
              item_bringing:'cups',
              party_id: party1.id ,
              user_id: user1.id
            }
          }
          post '/items', params: item_params
          error_response = JSON.parse(response.body)
          expect(error_response['allergies']).to include "can't be blank"
          expect(response).to have_http_status(422)
        end   
    
        it 'cannot create a new item without a party_id' do
          user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
          party1 = Party.create! party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id
          item_params = {
            item: {
              item_bringing:'cups',
              allergies:'none',
              user_id: user1.id
            }
          }
          post '/items', params: item_params
          error_response = JSON.parse(response.body)
          expect(error_response['party_id']).to include "can't be blank"
          expect(response).to have_http_status(422)
        end
         
        it 'cannot create a new item without user_id' do
          user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
          party1 = Party.create! party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', 
          description: 'this is a cant spell', user_id: user1.id
          Item.create!(item_bringing:'cups',allergies:'none',party_id: party1.id ,user_id: user1.id)
          item_params = {
            item: {
              item_bringing:'cups',
              allergies:'none',
              party_id: party1.id
            }
          }
          post '/items', params: item_params
          error_response = JSON.parse(response.body)
          expect(error_response['user_id']).to include "can't be blank"
          expect(response).to have_http_status(422)
        end
      end  

    describe 'PUT /items' do
      it 'edits a item' do
        # arrange - there needs to be a item in the DB to update
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"

        party1 = Party.create!(party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id)

        item = Item.create!(item_bringing:'cups',allergies:'none',party_id: party1.id ,user_id: user1.id)
        
        # arrange - the request params are trying to edit that item_id
        update_item_params = {
          item: {
            item_bringing:'beer',
            allergies:'none',
            party_id: party1.id ,
            user_id: user1.id
          }
        }
        # act
        put "/items/#{item.id}", params: update_item_params

        # assert - on response
        updated_item_response = JSON.parse(response.body)
        expect(updated_item_response['item_bringing']).to eq 'beer'
        expect(updated_item_response['allergies']).to eq 'none'
        expect(updated_item_response['party_id']).to eq party1.id
        expect(updated_item_response['user_id']).to eq user1.id
        expect(response).to have_http_status(200)
      end
    end
end