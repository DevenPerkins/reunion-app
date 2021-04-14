class Item < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :party
end
