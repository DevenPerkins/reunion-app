class CreateParties < ActiveRecord::Migration[6.1]
  def change
    create_table :parties do |t|
      t.string :party_name
      t.string :party_start_time
      t.string :location
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
