class TodoController < ApplicationController
  def home
  	@todos = Todo.all
  	@todo = Todo.new
  end

  def create
  	@todo = Todo.new(todo_params)
  	@todo.save
  	render json: @todo.to_json
  end

  private
  	def todo_params
  		params.permit(:name)
  	end
end
