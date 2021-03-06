package com.software2.foodtruckfinder.secure.payload;

import com.software2.foodtruckfinder.secure.model.Truck;

import javax.validation.constraints.Null;
import java.util.*;

public class TruckDistance implements Comparable {

    Double distance;
    Truck t;
    Double score;
    Double rating;

    public TruckDistance(Truck t, Double distance, Double score, Double rating) {
        this.t = new Truck(t);
        this.distance = distance;
        this.score = score;
        this.rating = rating;
    }

    public static ArrayList<TruckDistance> makeArrayFromMap(LinkedHashMap<Truck, Double> distances, LinkedHashMap<Truck, Double> sortedRankings, LinkedHashMap<Truck, Double> avgReviews) {
        ArrayList<TruckDistance> res = new ArrayList<>();

        for(Map.Entry<Truck, Double> e: sortedRankings.entrySet()){
            try {
                if (e.getKey() == null) {
                    continue;
                }
            }catch(NullPointerException ex){
                continue;
            }
            res.add(new TruckDistance(e.getKey(), distances.get(e.getKey()), e.getValue(),  avgReviews.get(e.getKey())));
        }

        Collections.sort(res);

        return res;
    }

    public Double getDistance() {
        return distance;
    }

    public void setDistance(Double distance) {
        this.distance = distance;
    }

    public Long getId() {
        return t.getId();
    }

    public String getName() {
        return t.getName();
    }


    public String getDescription() {
        return t.getDescription();
    }

    public Long getOwnerID() {
        return t.getOwnerID();
    }

    public String getType() {
        return t.getType();
    }

    public Integer getCost() {
        return t.getCost();
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double rank) {
        this.score = rank;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    @Override
    public int compareTo(Object o) {
        return this.score.compareTo(((TruckDistance)o).getScore());
    }
}
