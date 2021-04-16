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
      it 'creates a new party' do
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
        # arrange - build request with params
        party_params = {
          party: {
            party_name: 'reunion party',
            party_start_time: "7:00pm",
            location: '2342 good street',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user_id: user1.id
          }
        }
        # act - make POST request
        post '/parties', params: party_params
        # assert
        party = Party.all
        party_response = JSON.parse(response.body)
        expect(party_response['party_name']).to eq 'reunion party'
        expect(party_response['party_start_time']).to eq "7:00pm"
        expect(party_response['location']).to eq '2342 good street'
        expect(party_response['description']).to eq 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        expect(party_response['user_id']).to eq user1.id
      end



      it 'cannot create a new party without a party name' do
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
        party_params = {
          party: {
            party_start_time: "7:00pm",
            location: '2342 good street',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user_id: user1.id
          }
        }
        post '/parties', params: party_params
        error_response = JSON.parse(response.body)
        expect(error_response['party_name']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new party without a party start time' do
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
        party_params = {
          party: {
            party_name:"reunion party",
            location: '2342 good street',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user_id: user1.id
          }
        }
        post '/parties', params: party_params
        error_response = JSON.parse(response.body)
        expect(error_response['party_start_time']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end

      it 'cannot create a new party without a location' do
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
        party_params = {
          party: {
            party_name:"reunion party",
            party_start_time: "7:00pm",
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user_id: user1.id
          }
        }
        post '/parties', params: party_params
        error_response = JSON.parse(response.body)
        expect(error_response['location']).to include "can't be blank"
        expect(response).to have_http_status(422)
      end
    end
    it 'cannot create a new party without a description' do
      user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
      party_params = {
        party: {
          party_name:"reunion party",
          party_start_time: "7:00pm",
          location:'2342 good street',
          user_id: user1.id
        }
      }
      post '/parties', params: party_params
      error_response = JSON.parse(response.body)
      expect(error_response['description']).to include "can't be blank"
      expect(response).to have_http_status(422)
    end
  it 'cannot create a new party without a user' do
    user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"
    party_params = {
      party: {
        party_name: 'reunion party',
        party_start_time: "7:00pm",
        location: '2342 good street',
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }
    }
    post '/parties', params: party_params
    error_response = JSON.parse(response.body)
    expect(error_response['user_id']).to include "can't be blank"
    expect(response).to have_http_status(422)
  end
end



    describe 'PUT /parties' do
      it 'edits a party' do
        # arrange - there needs to be a party in the DB to update
        user1 = User.create! email:'stu@pid.com',  password:"2222222", first_name:"bob",last_name:"bobby",over_21: true,allergies: "none"

        party = Party.create!(party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: user1.id)
        # arrange - the request params are trying to edit that party_id
        update_party_params = {
          party: {
            party_name:"reunion party",
            party_start_time: "7pm",
            location:'2342 good street',
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            user_id: user1.id
          }
        }
        # act

        put "/parties/#{party.id}", params: update_party_params

        # assert - on response
        updated_party_response = JSON.parse(response.body)
        expect(updated_party_response['party_name']).to eq 'reunion party'
        expect(updated_party_response['party_start_time']).to eq "7pm"
        expect(updated_party_response['location']).to eq '2342 good street'
        expect(updated_party_response['description']).to eq "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        expect(updated_party_response['user_id']).to eq user1.id
        expect(response).to have_http_status(200)
      end
    end
