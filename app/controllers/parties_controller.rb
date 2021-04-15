class PartiesController < ApplicationController
  def index
    parties= Party.all
    render json: parties
  end

  def create
    party=Party.create(party_params)
    if party.valid?
      render json: party
    else
      render json: party.errors, status: 422 #unproccessable entity
    end
  end

  def update
    party = Party.find(params[:id])
    party.update(party_params)
    if party.valid?
      render json: party
    else
      render json: party.errors, status: 422 #unproccessable entity
    end
  end

  private #private only permits the user to add these columns to the database, allows you to only pass this data.
    def party_params
      params.require(:party).permit(:party_name, :party_start_time, :location, :description, :user_id)
    end

end
