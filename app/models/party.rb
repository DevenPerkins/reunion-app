class Party < ApplicationRecord
  belongs_to :user
  has_many :items
  validates :party_name, :party_start_time, :location, :description, :user_id, presence: true
end
