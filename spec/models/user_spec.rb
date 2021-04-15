require 'rails_helper'

RSpec.describe User, type: :model do
  let (:create_params) do
    {first_name:"bob", last_name:"bobby", allergies:"none", over_21:true}
  end
  it "should validate name" do
    user = User.create(create_params.except(:first_name))
    expect(user.errors[:first_name]).to include "can't be blank"
  end
  it "should validate last name" do
    user = User.create(create_params.except(:last_name))
    expect(user.errors[:last_name]).to include "can't be blank"
  end
  it "should validate allergies" do
    user = User.create(create_params.except(:allergies))
    expect(user.errors[:allergies]).to include "can't be blank"
  end
  it "should validate over 21" do
    user = User.create(create_params.except(:over_21))
    expect(user.errors[:over_21]).to include "can't be blank"
  end
end
