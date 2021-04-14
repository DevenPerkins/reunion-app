require 'rails_helper'

RSpec.describe Party, type: :model do
  let (:create_params) do
    {party_name:"Reunion Party", party_start_time:"7pm", location:"Bawston", description:"Dooryahd Outta Staydahs bogan chimbly Saddee lobstahrin'. Nummah puckahbrush leaf peepahs bang a left Jeesum Crow down cellah gawmy cubboard no-see-um Powrtland Museum of Aht, what a cahd flatlandas front dooryahd what a cahd door-yahd Loyston-Ahban."}
  end
  it "should validate party_name" do
    party = Party.create(create_params.except(:party_name))
    expect(party.errors[:party_name]).to include "can't be blank"
  end
  it "should validate party_start_time" do
    party = Party.create(create_params.except(:party_start_time))
    expect(party.errors[:party_start_time]).to include "can't be blank"
  end
  it "should validate location" do
    party = Party.create(create_params.except(:location))
    expect(party.errors[:location]).to include "can't be blank"
  end
  it "should validate description" do
    party = Party.create(create_params.except(:description))
    expect(party.errors[:description]).to include "can't be blank"
  end
end
