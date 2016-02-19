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

  def destroy
  	todos = Todo.all
  	todo = todos.find(params[:id])
  	todo.delete
  	head :no_content
  end

  private
  	def todo_params
  		params.permit(:name)
  	end
end
