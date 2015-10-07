class AddModeToSnippet < ActiveRecord::Migration
  def change
    add_column :snippets, :mode, :string
  end
end
