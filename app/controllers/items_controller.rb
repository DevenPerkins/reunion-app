class ItemsController < ApplicationController
  def index
    items=Item.all
    render json: items.as_json(include: :party)
  end

  def show
    item = Item.find(params[:id])
    render json: item.as_json(include: :user)
  end

  def create
    item=Item.create(item_params)
    if item.valid?
      render json: item
    else
      render json: item.errors, status: 422 #unproccessable entity
    end
  end

  def update
    item = Item.find(params[:id])
    item.update(item_params)
    if item.valid?
      render json: item
    else
      render json: item.errors, status: 422 #unproccessable entity
    end
  end

private #private only permits the user to add these columns to the database, allows you to only pass this data.
  def item_params
    params.require(:item).permit(:item_bringing, :allergies, :party_id, :user_id)
  end
end
