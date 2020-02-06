class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.boolean :done
      t.string :desc
      t.timestamps
    end
  end
end
