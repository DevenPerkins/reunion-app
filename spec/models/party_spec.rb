require 'rails_helper'

RSpec.describe Party, type: :model do
  let (:create_params) do
    {party_name:"Reunion Party", last_name:"bobby", allergies:"none", over_21:true}
  end
end
