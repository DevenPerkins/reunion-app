require 'rails_helper'

RSpec.describe Item, type: :model do
  let (:create_params) do
    {item_bringing:"Beer", allergies:"gluten", party_id:2, user_id:1}
  end
  it "should validate item_bringing" do
    item = Item.create(create_params.except(:item_bringing))
    expect(item.errors[:item_bringing]).to include "can't be blank"
  end
  it "should validate allergies" do
    item = Item.create(create_params.except(:allergies))
    expect(item.errors[:allergies]).to include "can't be blank"
  end
  it "should validate party_id" do
    item = Item.create(create_params.except(:party_id))
    expect(item.errors[:party_id]).to include "can't be blank"
  end
  it "should validate user_id" do
    item = Item.create(create_params.except(:user_id))
    expect(item.errors[:user_id]).to include "can't be blank"
  end
end
