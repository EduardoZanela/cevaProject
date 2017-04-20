class Capital < ActiveRecord::Migration[5.0]
  def change
    add_column :estados, :capital_id, :integer
    add_index :estados, :capital_id

  end
end
