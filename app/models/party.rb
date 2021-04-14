class Party < ApplicationRecord
  validates: :party_name, :party_start_time, :location, :description, :user_id, presence: true 
  belongs_to :user
  has_many :items
end
