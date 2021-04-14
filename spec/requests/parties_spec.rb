require 'rails_helper'

RSpec.describe "Parties", type: :request do
  describe "GET /parties" do
    it 'gets a list of Parties' do
      # arrange - there needs to be some data in the db for the response
      Party.create(party_name: 'Reunion Party', party_start_time: "7pm", location: '77 goodale dr San Diego, CA', description: 'this is a cant spell', user_id: 1)

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
      expect(first_party['user_id']).to eq 1
    end
  end
end
