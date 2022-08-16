package com.fms.hotel.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString @Builder
public class City implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String country;


    @OneToMany(mappedBy = "city", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Hotel> hotels = new java.util.ArrayList<>();

    public List<Hotel> getHotels() {
        return hotels;
    }

    public void setHotels(List<Hotel> hotels) {
        this.hotels = hotels;
    }

    public City(Long id, String name, String country) {
        this.id = id;
        this.name = name;
        this.country = country;
    }
}