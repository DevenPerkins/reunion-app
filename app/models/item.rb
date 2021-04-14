class Item < ApplicationRecord
  validates: :item_bringing, :allergies, :party_id, :user_id, presence: true 
  belongs_to :user, optional: true
  belongs_to :party
end
