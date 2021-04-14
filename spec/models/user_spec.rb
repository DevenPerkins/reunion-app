require 'rails_helper'

RSpec.describe User, type: :model do
  it "should validate name" do
    user = User.create
    expect(user.errors[:first_name]).to_not be_empty
  end
end
