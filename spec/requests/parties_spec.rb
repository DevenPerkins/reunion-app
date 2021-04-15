require 'rails_helper'

RSpec.describe "Parties", type: :request do
  describe "GET /parties" do
    it 'gets a list of Parties' do
      # arrange - there needs to be some data in the db for the response
      user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
      Party.create!(party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id)

      # act - simulating the HTTP GET request
      get '/parties'

      # assert
      party_response = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(party_response.length).to eq 1
      first_party = party_response.first
      expect(first_party['party_name']).to eq 'Reunion Party'
      expect(first_party['party_start_time']).to eq "7pm"
      expect(first_party['location']).to eq '77 goodale dr San Diego, CA'
      expect(first_party['description']).to eq 'this is a cant spell'
      expect(first_party['user_id']).to eq user1.id
    end
  end
    describe "POST /parties" do
      it 'creates a new parties' do
        # arrange - build request with params
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
        parties_params = {
          parties: {
            party_name: "reunion party",
            party_start_time: "7:00pm",
            location:"77 goodale dr, san diego CA",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user_id: user1.id
          }
        }
  
        # act - make POST request
        post '/parties', params: parties_params
  
        # assert
        # parties = parties.first
        # expect(parties.name).to eq 'Garfield'
        # expect(parties.age).to eq 32
        # expect(parties.enjoys).to eq 'silently judging you'
  
        parties_response = JSON.parse(response.body)
        expect(first_party['party_name']).to eq 'Reunion Party'
        expect(first_party['party_start_time']).to eq "7pm"
        expect(first_party['location']).to eq '77 goodale dr San Diego, CA'
        expect(first_party['description']).to eq 'this is a cant spell'
        expect(first_party['user_id']).to eq user1.id
      end
  
      # it 'cannot create a new cat without a name' do
      #   cat_params = {
      #     cat: {
      #       age: 8,
      #       enjoys: 'Sleeping on your face'
      #     }
      #   }
  
      #   post '/parties', params: cat_params
  
      #   error_response = JSON.parse(response.body)
      #   expect(error_response['name']).to include "can't be blank"
      #   expect(response).to have_http_status(422)
      # end
  
      # it 'cannot create a new cat without a age' do
      #   cat_params = {
      #     cat: {
      #       name: 'Tom',
      #       enjoys: 'Sleeping on your face'
      #     }
      #   }
  
      #   post '/parties', params: cat_params
  
      #   error_response = JSON.parse(response.body)
      #   expect(error_response['age']).to include "can't be blank"
      #   expect(response).to have_http_status(422)
      # end
  end
end
