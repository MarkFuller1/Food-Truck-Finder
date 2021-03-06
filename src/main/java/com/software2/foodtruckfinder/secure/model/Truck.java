package com.software2.foodtruckfinder.secure.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.Objects;

@Entity // This tells Hibernate to make a table out of this class
public class Truck {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    private String Name;
    @NotNull
    private String Description;
    @NotNull
    private Long ownerID;
    @NotNull
    private String type;
    @NotNull
    private Integer cost;

    private String Menu;

    public String getMenu() {
        return Menu;
    }

    public void setMenu(String menutext) {
        Menu = menutext;
    }


    public Truck(Long id, String name, String description, Long ownerID, String type, Integer cost, String menu) {
        this.id = id;
        Name = name;
        Description = description;
        this.ownerID = ownerID;
        this.type = type;
        this.cost = cost;
    }

    public Truck(Truck t) {
        this.id = t.getId();
        this.Name = t.getName();
        this.Description = t.getDescription();
        this.ownerID = t.getOwnerID();
        this.type = t.getType();
        this.cost = t.getCost();
    }

    public Double getZero(){
        return 0.0;
    }

    public Truck(){}

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        Name = name;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public void setOwnerID(Long ownerID) {
        this.ownerID = ownerID;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setCost(Integer cost) {
        this.cost = cost;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return Name;
    }

    public String getDescription() {
        return Description;
    }

    public Long getOwnerID() {
        return ownerID;
    }

    public String getType() {
        return type;
    }

    public Integer getCost() {
        return cost;
    }

    @Override
    public String toString() {
        return "Truck{" +
                "id=" + id +
                ", Name='" + Name + '\'' +
                ", Description='" + Description + '\'' +
                ", ownerID=" + ownerID +
                ", type='" + type + '\'' +
                ", cost=" + cost +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Truck)) return false;
        Truck truck = (Truck) o;
        return Objects.equals(getId(), truck.getId()) &&
                Objects.equals(getName(), truck.getName()) &&
                Objects.equals(getDescription(), truck.getDescription()) &&
                Objects.equals(getOwnerID(), truck.getOwnerID()) &&
                Objects.equals(getType(), truck.getType()) &&
                Objects.equals(getCost(), truck.getCost()) &&
                Objects.equals(getMenu(), truck.getMenu());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName(), getDescription(), getOwnerID(), getType(), getCost(), getMenu());
    }
}