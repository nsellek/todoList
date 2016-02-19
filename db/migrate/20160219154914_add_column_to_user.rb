class AddColumnToUser < ActiveRecord::Migration
  def change
    add_reference :users, :todo_id, index: true, foreign_key: true
  end
end
